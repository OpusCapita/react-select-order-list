import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import ExampleContainer from './components/example.container';
import './app.component.scss';
import './favicon.ico';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Router>
        <Route path="/" component={Component} />
      </Router>
    </AppContainer>,
    document.getElementById('oc-examples'),
  );
};

renderApp(ExampleContainer);

// Webpack Hot Module Replacement API
/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./components/example.container', () => {
    const Comp = require('./components/example.container').default;
    renderApp(Comp);
  });
}
