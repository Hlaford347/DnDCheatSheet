import React, { Fragment } from 'react';
import { Box, Grid, Button } from '@material-ui/core/';
import PropTypes from 'prop-types';

const CharacterItem = ({ character }) => {
  const { name, race, subrace, level, skills, role } = character;

  return (
    <Fragment>
      <Box>
        <Grid container spacing={0} justify='space-between'>
          <Grid item xs={2}>
            <strong>{name}</strong>
          </Grid>
          <Grid item xs={2}>
            Race: {subrace ? subrace : race}
          </Grid>
          <Grid item xs={2}>
            Class: {role}
          </Grid>
          <Grid item xs={2}>
            Level: {level}
          </Grid>
          <Grid item xs={2}>
            {skills + ', '}
          </Grid>
          <Grid item>
            <Button color='secondary' variant='contained'>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
};

CharacterItem.defaultProps = {
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

export default CharacterItem;
