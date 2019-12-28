import React, { Fragment, useRef } from 'react';
import HeaderSection from '../../layout/HeaderSection';
import { NotificationManager } from 'react-notifications';
import Http from '../../infra/Http';
import DemoForm from '../../components/demo/demo-form';

const buttonClick = () => {
  Http.get('/api/todos').then(response => {
    NotificationManager.info('Your get request executed successifully!');
  });
};

export default () => {
  const txtMessage = useRef(null);

  return (
    <Fragment>
      <HeaderSection title="Home" subtitle="Home View" />
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <HeaderSection title="Common components" />
            <p>This is how you make the header section look good:</p>
            <code>{'<HeaderSection title="Home" subtitle="Home View" />'}</code>
          </div>
          <div className="box mt-2">
            <HeaderSection
              title="Notification System"
              subtitle="Example"
            ></HeaderSection>
            <div className="form-group">
              <label htmlFor="txtMessage">Type in your message</label>
              <input
                type="text"
                className="form-control"
                ref={txtMessage}
                placeholder="Message goes Here"
              />
            </div>
            <div className="form-group">
              <div className="btn-group">
                <button type="button" className="btn btn-info">
                  Show Message
                </button>
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle dropdown-toggle-split"
                  id="dropdownMenuReference"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-reference="parent"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuReference"
                >
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() =>
                      NotificationManager.success(txtMessage.current.value)
                    }
                  >
                    <span className="text-success">Success</span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() =>
                      NotificationManager.info(txtMessage.current.value)
                    }
                  >
                    <span className="text-info">Information</span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() =>
                      NotificationManager.warning(txtMessage.current.value)
                    }
                  >
                    <span className="text-warning">Warning</span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() =>
                      NotificationManager.error(txtMessage.current.value)
                    }
                  >
                    <span className="text-danger">Error</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box mt-2">
            <HeaderSection title="Api proxy"></HeaderSection>
            <p>
              There is an api proxy set up in order to prevent cors validation
              error while in development. You may change the appropriate section
              in webpack-config.js to make it suit your needs.
            </p>
            <p>
              All api requests are wrapped in a way that a loader component will
              show up after the set threshold, which is 500 milliseconds by
              default, but you can surely customize that.
            </p>
            <button className="btn btn-info" onClick={buttonClick}>
              Hit the backend
            </button>
          </div>
          <div className="box mt-2 mb-3">
            <HeaderSection title="Demo form with validation"></HeaderSection>
            <DemoForm></DemoForm>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
