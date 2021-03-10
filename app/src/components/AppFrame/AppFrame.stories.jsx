import React from "react";
import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "AppFrame",
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>lafmoasnfs</AppFrame>
  </Router>
);
