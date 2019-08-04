import React from "react";
import ReactDOM from "react-dom";
import Location from "./../components/Location";

const tempProp = {
  address: "Temporary Location",
  id: "1",
  coordinates: {
    lat: "31.5203696",
    lng: "74.35874729999999"
  }
};

it("Location component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Location {...tempProp} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
