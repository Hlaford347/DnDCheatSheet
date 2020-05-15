import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Character from './components/pages/Character';
import CheatSheet from './components/pages/CheatSheet';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blueGrey, orange } from '@material-ui/core/colors/';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import CharacterState from './context/character/CharacterState';
import AuthState from './context/auth/AuthState';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: orange,
  },
});

const App = () => {
  useEffect(() => {});

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
                  <Route exact path='/character' component={Character} />
                  <Route exact path='/cheatSheet' component={CheatSheet} />
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
