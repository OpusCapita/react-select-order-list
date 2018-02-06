import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import SelectOrderListView from './components/select-order-list.component';

import './app.component.scss';

require('../images/favicon.ico');

render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={SelectOrderListView} />
    </Router>
  ), document.getElementById('oc-examples'),
);
