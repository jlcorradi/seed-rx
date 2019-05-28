import React, { Fragment } from "react";
import { HeaderSection } from "../layout";

export default ({location}) => {
  console.log(location);
  return (
    <Fragment>
      <HeaderSection title="About" subtitle="About View" />
      <p>Path: {location.pathname}</p>
    </Fragment>
  );
}