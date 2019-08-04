/*
 * GoogleMap hover example
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { ApiKey } from "./../core/Constants";
import { K_SIZE } from "../core/MarkerStyles";
import _ from "lodash";

export default class Map extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [52.52000659999999, 13.404954],
    zoom: 5
  };

  getMarkers() {
    return _.map(this.props.markers, (marker, index) => {
      return (
        <Marker
          {...marker.coordinates}
          text={marker.address}
          id={marker.id}
          key={index}
        />
      );
    });
  }

  render() {
    const Markers = this.getMarkers();
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: ApiKey }} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}
        hoverDistance={K_SIZE / 2}
      >
        {Markers}
      </GoogleMapReact>
    );
  }
}
