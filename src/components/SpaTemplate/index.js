import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import Sidebar from '../Sidebar';

export default props => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className={classNames('wrapper', { 'sidebar-active': sidebarActive })}>
      <Sidebar onHideClick={() => setSidebarActive(false)}></Sidebar>
      <div className="content">
        <nav class="navbar navbar-expand">
          <a
            onClick={() => setSidebarActive(!sidebarActive)}
            className="nav-link"
            id="sidebar-toggler"
          >
            <i className="fa fa-bars" />
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">
                <span className="ti-shield" /> About
              </NavLink>
            </li>
          </ul>
        </nav>

        <section class="container-fluid mt-3">{props.children}</section>
      </div>
    </div>
  );
};
