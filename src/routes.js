import React from 'react';
import {Route} from 'react-router';
import Rights from './templates/rights/Rights';
import Feeds from './templates/feeds/Feeds';
import Articles from './templates/articles/Articles';
import Auto from './templates/auto/Auto';


export default (
  <Route>
    <Route path="/rights/:id" component={Rights} />
    <Route path="/feeds/:id" component={Feeds} />
    <Route path="/articles/:id" component={Articles} />
    <Route path="/auto/:id" component={Auto} />
  </Route>
);
