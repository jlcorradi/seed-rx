import React, { Fragment } from 'react';
import { HeaderSection } from '../layout';

export default ({ location }) => {
  console.log(location);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <HeaderSection
            title="About"
            subtitle="About This Project"
          ></HeaderSection>
          <p>
            This is just a seed to create react applications easily for testing
            and other proposes.
          </p>
        </div>
      </div>
    </div>
  );
};
