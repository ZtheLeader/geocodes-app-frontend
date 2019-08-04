import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Marker from "../components/Marker";

const tempProp = {
  $hover: PropTypes.boolean,
  $text: PropTypes.string
};

it("Marker component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Marker {...tempProp} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
