import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/App.js';
import Details from '../components/Details.js';

const Router = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/model/:name' component={Details} />
      </Switch>
    </div>
  )
}

export default Router;
