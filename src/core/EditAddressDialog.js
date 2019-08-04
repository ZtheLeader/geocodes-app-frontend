import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class EditAddressDialog extends Component {
  constructor() {
    super();
    this.state = {
      address: {
        address: "",
        id: "",
        coordinates: {}
      }
    };
  }

  componentDidMount() {
    this.setState({
      address: this.props.address
    });
  }

  editAddress(event) {
    event.preventDefault();
    this.props.handleEditAddress(this.state.address);
  }

  inputChangeHandler(event, eventName) {
    const updatedAddress = {
      address: this.state.address.address,
      id: this.state.address.id,
      coordinates: this.state.address.coordinates
    };

    updatedAddress[eventName] = event.target.value;
    this.setState({ address: updatedAddress });
  }

  render() {
    return (
      <Fragment>
        <Dialog
          open={true}
          onClose={this.props.editAddressToggle}
          aria-labelledby="form-Dialog-title"
          maxWidth="sm"
        >
          <DialogTitle id="form-Dialog-title">Edit Address</DialogTitle>
          <form onSubmit={this.editAddress.bind(this)}>
            <DialogContent>
              <DialogContentText>
                Edit address here and it will show on the map
              </DialogContentText>

              <TextField
                value={this.state.address.address}
                autoFocus
                margin="dense"
                id="name"
                label="Address"
                type="text"
                fullWidth
                onChange={event => this.inputChangeHandler(event, "address")}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.editAddressToggle} color="primary">
                Cancel
              </Button>
              <Button onClick={this.editAddress.bind(this)} color="primary">
                Edit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}

export default EditAddressDialog;
