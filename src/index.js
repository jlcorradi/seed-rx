import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationContainer } from 'react-notifications';

import { HashRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap';

import './styles/main.scss';
import './assets/themify/themify-icons.css';

import 'react-notifications/lib/notifications.css';

import App from './App';
import Loader from './components/Loader';

ReactDOM.render(
  <Router>
    <App></App>
    <NotificationContainer />
    <Loader threshold={500} />
  </Router>,
  document.getElementById('root'),
);
