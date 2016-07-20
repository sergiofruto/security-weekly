var React = require('react');
var ReactDOM = require('react-dom');

import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';

/*
  Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));