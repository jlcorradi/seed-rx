import React, { Fragment } from "react";
import { HeaderSection } from "../layout";

export default () => {
  return (
    <Fragment>
      <HeaderSection title="Home" subtitle="Home View" />
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <HeaderSection title="Box">
              <button className="btn btn-primary">Action</button>
            </HeaderSection>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};