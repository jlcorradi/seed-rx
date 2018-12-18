import React, { Component, Fragment } from 'react'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="#" class="navbar-brand"><i class="fa fa-map-o"></i> testapp</a>
        </nav>

        <section class="container-fluid">
          <h4>App</h4>
          <span class="text-muted">Game On!</span>
        </section>
      </Fragment>
    )
  }
}
