import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    position: 'absolute',
    zIndex: 3,
    marginLeft: '16px',
    marginTop: '7px',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  heart: {
    backgroundColor: 'red',
    display: 'inline-block',
    height: '30px',
    margin: '0 10px',
    marginTop: '7px',
    position: 'relative',
    top: 0,
    transform: 'rotate(-45deg)',
    width: '30px',

    '&::before': {
      content: '""',
      backgroundColor: 'red',
      borderRadius: '50%',
      height: '30px',
      position: 'absolute',
      width: '30px',
      top: '-15px',
      left: 0,
    },
    '&::after': {
      content: '""',
      backgroundColor: 'red',
      borderRadius: '50%',
      height: '30px',
      position: 'absolute',
      width: '30px',
      left: '15px',
      top: 0,
    },
  },
});

const Heart = ({ maxHP }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography className={classes.text} align='center'>
        {maxHP < 10 ? `0${maxHP}` : maxHP}
      </Typography>
      <div className={classes.heart}></div>
    </Fragment>
  );
};

export default Heart;
