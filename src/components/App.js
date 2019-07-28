import React, { useState } from "react";
import { NavLink as Link, Switch, Route } from "react-router-dom";
import classNames from "classnames";
import { HomeView, AboutView } from "../views";

export const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div
      className={classNames("wrapper", { "sidebar-active": sidebarActive })}
    >
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
              <Link className="nav-link" activeClassName="active" to="/about">
                <span className="ti-shield" /> About
              </Link>
            </li>
          </ul>
        </nav>

        <section class="container-fluid mt-3">
          <Routes></Routes>
        </section>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  let { onHideClick } = props;
  return (
    <div id="sidebar">
      <span id="sidebar-close-btn" className="ti-close" onClick={onHideClick}></span>
      <div className="sidebar-header text-center">
        <span className="ti-cup" style={{ fontSize: "40px" }} />
        <p>Playground</p>
      </div>
      <ul className="menu list-unstyled">
        <li>
          <Link to="/" activeClassName="active" exact>
            <span className="ti-arrow-circle-right" /> Home
          </Link>
        </li>
        <li>
          <a className="dropdown-toggle" href="#subMenu" aria-expanded="false" data-toggle="collapse"><span className="ti-arrow-circle-right" /> Submenu</a>
          <ul className="collapse list-unstyled" id="subMenu">
            <li>
              <Link activeClassName="active" to="/about" exact>
                <span className="ti-arrow-circle-right" /> Item 1
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link activeClassName="active" to="/contact" exact>
            <span className="ti-envelope" /> Contact
              </Link>
        </li>
      </ul>
    </div>
  );
};

const Routes = () => {
  return (<Switch>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/about" component={AboutView} />
    <Route exact to="/contact" render={() => (<div>Contact Us</div>)} />
  </Switch>);
}
