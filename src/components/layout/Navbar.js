import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '50px',
  },
});

const Navbar = ({ title, icon }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position='static'>
        <Toolbar>
          <Button component={RouterLink} to='/'>
            Home
          </Button>
          <Button component={RouterLink} to='/character'>
            Characters
          </Button>
          <Button component={RouterLink} to='/cheatSheet'>
            Cheat Sheet
          </Button>
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
