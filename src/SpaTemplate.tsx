import { FC, useState } from "react";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";

import { Sidebar } from "./components/Sidebar";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className={classNames("wrapper", { "sidebar-active": sidebarActive })}>
      <Sidebar onHideClick={() => setSidebarActive(false)}></Sidebar>
      <div className="content">
        <nav className="flex px-4 py-4 border-b-2 border-gray-100 bg-white space-x-2">
          <a
            onClick={() => setSidebarActive(!sidebarActive)}
            className="nav-link"
            id="sidebar-toggler"
          >
            <i className="fa fa-bars" />
          </a>
          <ul className="flex flex-1 justify-end">
            <NavLink className="" to="/about">
              <span className="ti-shield" /> About
            </NavLink>
          </ul>
        </nav>

        <section className="container-fluid mt-4">
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default Layout;
