import { NavLink } from "react-router-dom";

interface SidebarProps {
  onHideClick: () => void;
}

export function Sidebar({ onHideClick }: Readonly<SidebarProps>) {
  return (
    <div id="sidebar" className="bg-gray-800 text-white">
      <span
        id="sidebar-close-btn"
        className="ti-close text-white cursor-pointer"
        onClick={onHideClick}
      ></span>
      <div className="sidebar-header text-center">
        <span className="ti-cup text-4xl" />
        <p>Playground</p>
      </div>
      <ul className="menu list-unstyled">
        <li>
          <NavLink
            to="/home"
            onClick={onHideClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="ti-arrow-circle-right" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={onHideClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="ti-download" /> Example
          </NavLink>
        </li>
        <li>
          <a
            className="dropdown-toggle cursor-pointer"
            href="#"
            aria-expanded="false"
            data-toggle="collapse"
          >
            <span className="ti-arrow-circle-right" /> Submenu
          </a>
          <ul className="collapse list-unstyled" id="subMenu">
            <li>
              <NavLink
                to="/about"
                onClick={onHideClick}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "active" : ""
                }
              >
                <span className="ti-download" /> Example
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
