import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import SelectOrderList from './components/list-control/select-order-list.component';

import './app.component.scss';

require('../images/favicon.ico');

render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={SelectOrderList} />
    </Router>
  ), document.getElementById('oc-examples'),
);
