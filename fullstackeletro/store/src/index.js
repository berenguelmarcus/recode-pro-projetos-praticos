import React from "react";
import ReactDOM from "react-dom";
import Routes from './router';

ReactDOM.hydrate(
  <>
  <Routes />
  </>,
  document.getElementById("root")
);
