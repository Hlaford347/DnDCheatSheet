import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Character from './components/pages/Character';
import CheatSheet from './components/pages/CheatSheet';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blueGrey, orange } from '@material-ui/core/colors/';

import CharacterState from './context/character/CharacterState';

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
      <CharacterState>
        <HashRouter>
          <Fragment>
            <Navbar />
            <div className='row'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/character' component={Character} />
                <Route path='/cheatSheet' component={CheatSheet} />
              </Switch>
            </div>
          </Fragment>
        </HashRouter>
      </CharacterState>
    </ThemeProvider>
  );
};

export default App;
