import React, { Component, Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import classNames from 'classnames';
import HeaderSection from './HeaderSection';

export default class App extends Component {
  state = {
    sidebarActive: false
  };

  render() {
    let { sidebarActive } = this.state;
    return (
      <div className={classNames('wrapper', { 'sidebar-active': sidebarActive })}>
        <div id="sidebar">
          <div className="sidebar-header text-center">
            <span className="ti-cup" style={{ fontSize: '40px' }} />
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

        <div className="content">
          <nav class="navbar navbar-expand-lg">
            <a onClick={() => this.setState({ sidebarActive: !sidebarActive })} className="nav-link">
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
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/about" component={AboutView} />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}

const HomeView = props => {
  return (
    <Fragment>
      <HeaderSection title="Home" subtitle="Home View" />
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <HeaderSection title="Box">
              <button className="btn btn-primary">Action</button>
            </HeaderSection>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const AboutView = props => {
  return (
    <Fragment>
      <HeaderSection title="About" subtitle="About View" />
    </Fragment>
  );
};