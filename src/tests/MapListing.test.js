import React from "react";
import ReactDOM from "react-dom";
import MapListing from "./../components/MapListing";

const tempProp = {
  address: "Temporary MapListing",
  id: "1",
  coordinates: {
    lat: "31.5203696",
    lng: "74.35874729999999"
  }
};

it("MapListing component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MapListing {...tempProp} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
