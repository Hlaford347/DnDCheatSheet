import React, { Fragment } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  playerItem: {
    padding: '1rem',
    marginTop: '0.5rem',
    fontSize: 12,
    backgroundColor: '#fff',
  },
  gridRow: {
    marginTop: '0.5rem',
  },
});

const PlayerItem = ({ character }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper className={classes.playerItem}>
        <Grid container justify='space-between'>
          <Grid item xs={3}>
            <div>
              <strong>{character.name}</strong>
            </div>
          </Grid>
          <Grid item xs={3}>
            Level: {character.level}
          </Grid>
          <Grid item xs={3}>
            Max HP: {character.maxHP}
          </Grid>
          <Grid item xs={3}>
            AC: {character.armorClass}
          </Grid>
          <Grid item xs={12} className={classes.gridRow}>
            {character.subrace !== null ? character.subrace : character.race}{' '}
            {character.role}
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

PlayerItem.propTypes = {
  character: PropTypes.object.isRequired,
};

PlayerItem.defaultProps = {
  character: {
    id: 1,
    name: '',
    level: 0,
    role: null,
    skills: [],
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
};

export default PlayerItem;
