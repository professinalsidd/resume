import React, { Fragment } from "react";
import NavbarComp from "../navbar/navbar";

const LayoutComp = ({ children }) => {
  return (
    <Fragment>
      <NavbarComp />
      {children}
    </Fragment>
  );
};

export default LayoutComp;
