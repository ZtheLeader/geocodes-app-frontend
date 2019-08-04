import React from "react";
import ReactDOM from "react-dom";
import GoogleMap from "./../components/GoogleMap";

const tempProp = {
  center: [52.52000659999999, 13.404954],
  zoom: 5
};

it("GoogleMaps component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GoogleMap {...tempProp} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
