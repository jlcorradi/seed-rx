import { FC, useRef } from "react";

import HeaderSection from "../components/HeaderSection";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const buttonClick = () => {
  // Http.get('/api/todos').then(_response => {
  //     toast.success('Your GET request executed successfully!');
  // });
};

const NotificationDemo: FC = () => {
  const txtMessage = useRef<HTMLInputElement>(null);

  return (
    <>
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
          <button
            type="button"
            className="btn btn-info"
            onClick={() => toast.success(txtMessage.current!.value)}
          >
            Show Message
          </button>
          <button
            type="button"
            className=""
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
              onClick={() => toast.success(txtMessage.current!.value)}
            >
              <span className="text-success">Success</span>
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => toast.info(txtMessage.current!.value)}
            >
              <span className="text-info">Information</span>
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => toast.warning(txtMessage.current!.value)}
            >
              <span className="text-warning">Warning</span>
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => toast.error(txtMessage.current!.value)}
            >
              <span className="text-danger">Error</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const HomeView: FC = () => {
  return (
    <>
      <div className="px-4">
        <HeaderSection title="Home" subtitle="Home View" />
      </div>

      <div className="flex">
        <div className="flex-grow">
          <div className="box">
            <HeaderSection title="Common components" />
            <p>This is how you make the header section look good:</p>
            <code>{'<HeaderSection title="Home" subtitle="Home View" />'}</code>
          </div>
          <div className="box mt-2">
            <HeaderSection title="Notification System" subtitle="Example" />
            <NotificationDemo />
          </div>
          <div className="box mt-2">
            <HeaderSection title="Api proxy" subtitle="Example of how to hit the backend" />
            <p>
              There is an API proxy set up to prevent CORS validation errors
              while in development. You may change the appropriate section in
              `webpack-config.js` to make it suit your needs.
            </p>
            <p>
              All API requests are wrapped in a way that a loader component will
              show up after the set threshold, which is 500 milliseconds by
              default, but you can surely customize that.
            </p>
            <button className="btn btn-info" onClick={buttonClick}>
              Hit the backend
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
