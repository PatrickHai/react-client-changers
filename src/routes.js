import React from 'react';
import {Route} from 'react-router';
import Rights from './templates/rights/Rights';
import Feeds from './templates/feeds/Feeds';
import Articles from './templates/articles/Articles';

function requireAuth(nextState, replace, next){
  if (!auth.loggedIn()) {
    browserHistory.replace({
      pathname: '/auth/login',
      state: { 
        nextLocation: {
          pathname: nextState.location.pathname
        } 
      }
    })
  }else{
    next();
  }
}

export default (
  <Route>
    <Route path="/rights/:id" component={Rights} />
    <Route path="/feeds/:id" component={Feeds} />
    <Route path="/articles/:id" component={Articles} />
  </Route>
);
