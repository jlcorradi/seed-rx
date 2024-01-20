import { FC, useState } from "react";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className={classNames("wrapper", { "sidebar-active": sidebarActive })}>
      <Sidebar onHideClick={() => setSidebarActive(false)}></Sidebar>
      <div className="content">
        <nav className="navbar navbar-expand">
          <a
            onClick={() => setSidebarActive(!sidebarActive)}
            className="nav-link"
            id="sidebar-toggler"
          >
            <i className="fa fa-bars" />
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <span className="ti-shield" /> About
              </NavLink>
            </li>
          </ul>
        </nav>

        <section className="container-fluid mt-3">
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default Layout;
