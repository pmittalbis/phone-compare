import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/App.js';
import DetailsWithData from '../containers/DetailsWithData.js';
import PhonesOfBrandsWithData from '../containers/PhonesOfBrandsWithData.js';

const Router = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/model/:id' component={DetailsWithData} />
        <Route path='/brand/:id' component={PhonesOfBrandsWithData} />
      </Switch>
    </div>
  )
}

export default Router;
