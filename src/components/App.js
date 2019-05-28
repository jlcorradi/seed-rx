import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import classNames from "classnames";
import { HomeView, AboutView } from "../views";

export const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div
      className={classNames("wrapper", { "sidebar-active": sidebarActive })}
    >
      <Sidebar></Sidebar>

      <div className="content">
        <nav class="navbar navbar-expand-lg">
          <a
            onClick={() => setSidebarActive(!sidebarActive)}
            className="nav-link"
          >
            <i className="fa fa-bars" />
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
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

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="sidebar-header text-center">
        <span className="ti-cup" style={{ fontSize: "40px" }} />
        <p>Playground</p>
      </div>
      <ul className="menu list-unstyled">
        <li>
          <Link to="/">
            <span className="ti-arrow-circle-right" /> Home
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
  </Switch>);
}
