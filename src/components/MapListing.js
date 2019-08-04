import React, { Fragment } from "react";
import Location from "./Location";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";


class MapListing extends React.Component {
  constructor() {
    super();
    this.state = {
      maps: []
    };
  }


  deleteComment(mapId) {
    this.props.onDelete(mapId);
  }
  fetchLocations() {
    return this.state.maps;
  }

  _getLocations() {
    return _.map(this.props.maps, (map, index) => {
      return (
        <Location
          address={map.address}
          coordinates={map.coordinates}
          key={index}
          id={map.id}
          onDelete={this.deleteComment.bind(this)}
          onEdit={this.props.onEdit}
        />
      );
    });
  }
  render() {
    const locations = this._getLocations();
    const useStyles = makeStyles(theme => ({
      title: {
        flexGrow: 1
      }
    }));
    return (
      <Fragment>
        <Typography variant="h6" className={useStyles.title}>
          Locations
        </Typography>
        {locations}
      </Fragment>
    );
  }
}

export default MapListing;
