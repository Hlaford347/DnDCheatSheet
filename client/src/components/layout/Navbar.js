import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Grid, Hidden } from '@material-ui/core';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      Hello {user && user.name}
      <Button component={RouterLink} to='/login' onClick={onLogout}>
        <i className='fas fa-sign-out-alt'></i> <Hidden xsDown>Logout</Hidden>
      </Button>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Button component={RouterLink} to='/register'>
        Register
      </Button>
      <Button component={RouterLink} to='/login'>
        Login
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar position='static'>
        <Toolbar>
          <Grid container>
            {' '}
            <Grid item align='left' xs={6}>
              <Button component={RouterLink} to='/'>
                Home
              </Button>
              {isAuthenticated && (
                <Fragment>
                  <Button component={RouterLink} to='/character'>
                    Characters
                  </Button>
                  <Button component={RouterLink} to='/cheatSheet'>
                    Cheat Sheet
                  </Button>
                </Fragment>
              )}
            </Grid>
            <Grid item align='right' xs={6}>
              {isAuthenticated ? authLinks : guestLinks}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Cheat Sheet',
  icon: 'fas fa-digital-tachograph',
};

export default Navbar;
