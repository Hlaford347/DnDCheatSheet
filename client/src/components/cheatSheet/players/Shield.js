import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  text: {
    position: 'absolute',
    zIndex: 3,
    marginLeft: '16px',
    marginTop: '7px',
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    border: '1px #ccc solid',
  },
  shield: { fontSize: 50, color: '#aaa', marginTop: '-5px' },
});

const Shield = ({ armorClass }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.text}>{armorClass}</div>
      <i className={'fas fa-shield-alt ' + classes.shield}></i>
    </Fragment>
  );
};

export default Shield;
