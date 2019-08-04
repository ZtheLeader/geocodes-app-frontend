import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class AddAddressDialog extends Component {
  constructor() {
    super();
    this.state = {
      address: ""
    };
  }

  addAddress(event) {
    event.preventDefault();
    this.props.handleNewAddress(this.state.address);
  }

  inputChangeHandler(event) {
    this.setState({ address: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <Dialog
          open={true}
          onClose={this.props.addAddressToggle}
          aria-labelledby="form-Dialog-title"
          maxWidth="sm"
        >
          <DialogTitle id="form-Dialog-title">Add Address</DialogTitle>
          <form onSubmit={this.addAddress.bind(this)}>
            <DialogContent>
              <DialogContentText>
                Add an address here and it will show on the map
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Address"
                type="text"
                fullWidth
                onChange={event => this.inputChangeHandler(event)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.addAddressToggle} color="primary">
                Cancel
              </Button>
              <Button onClick={this.addAddress.bind(this)} color="primary">
                Add
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}

export default AddAddressDialog;
