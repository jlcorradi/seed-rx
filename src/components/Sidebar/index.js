import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => {
  let { onHideClick } = props;
  return (
    <div id="sidebar">
      <span
        id="sidebar-close-btn"
        className="ti-close"
        onClick={onHideClick}
      ></span>
      <div className="sidebar-header text-center">
        <span className="ti-cup" style={{ fontSize: '40px' }} />
        <p>Playground</p>
      </div>
      <ul className="menu list-unstyled">
        <li>
          <NavLink to="/" activeClassName="active" onClick={onHideClick} exact>
            <span className="ti-arrow-circle-right" /> Home
          </NavLink>
        </li>
        <li>
          <a
            className="dropdown-toggle"
            href="#subMenu"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <span className="ti-arrow-circle-right" /> Submenu
          </a>
          <ul className="collapse list-unstyled" id="subMenu">
            <li>
              <NavLink activeClassName="active" to="/about" onClick={onHideClick} exact>
                <span className="ti-download" /> Example
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
