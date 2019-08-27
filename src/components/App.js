import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SpaTemplate from './SpaTemplate';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';

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
