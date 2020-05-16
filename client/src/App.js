import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Character from './components/pages/Character';
import CheatSheet from './components/pages/CheatSheet';
import Profile from './components/pages/Profile';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blueGrey, orange } from '@material-ui/core/colors/';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import CharacterState from './context/character/CharacterState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: orange,
  },
});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthState>
        <CharacterState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='row'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <PrivateRoute exact path='/character' component={Character} />
                  <PrivateRoute
                    exact
                    path='/cheatSheet'
                    component={CheatSheet}
                  />
                  <Route exact path='/profile' component={Profile} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </CharacterState>
      </AuthState>
    </ThemeProvider>
  );
};

export default App;
