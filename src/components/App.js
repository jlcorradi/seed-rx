import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeView, AboutView } from '../views';
import SpaTemplate from './SpaTemplate';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/about" component={AboutView} />
    </Switch>
  );
};

export default () => {
  return (
    <SpaTemplate>
      <Routes></Routes>
    </SpaTemplate>
  );
};
