import React from 'react';
import {Route} from 'react-router';
import App from './containers/App';

export default (
  <Route path="/">
    <Route path="rights/:id" component={App} />
  </Route>
);
