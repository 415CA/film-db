import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import { Film, FilmDetails, Home, NoMatch, Search } from '../../Pages';
import Navigation from '../Navigation';


const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.SEARCH} component={Search} />
          <Route exact path={ROUTES.FILM} component={Film} />
          <Route exact path={ROUTES.FILM_DETAILS} component={FilmDetails} />
          <Route path='*' component={NoMatch} />
          </Switch>
      </Router>
    </>
  );
};

export default App;
