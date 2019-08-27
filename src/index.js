import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap';

import './styles/main.scss';
import './assets/themify/themify-icons.css';
import App from './App';

ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.getElementById('root')
);
