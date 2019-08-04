import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LocationIcon from "@material-ui/icons/LocationOn";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

class Location extends React.Component {
  handleDelete(e) {
    e.preventDefault();

    if (window.confirm("Are you sure?")) {
      this.props.onDelete(this.props.id);
    }
  }

  handleEdit() {
    this.props.onEdit(this.props);
  }
  render() {
    return (
      <List dense={true}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={this.props.address}
            secondary={`Latitude: ${this.props.coordinates.lat}, Longitude: ${
              this.props.coordinates.lng
            }`}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="Edit"
              onClick={this.handleEdit.bind(this)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Delete"
              onClick={this.handleDelete.bind(this)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}

export default Location;
