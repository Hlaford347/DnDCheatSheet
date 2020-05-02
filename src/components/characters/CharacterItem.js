import React from 'react';
import { Card, CardContent, Grid, Button } from '@material-ui/core/';
import PropTypes from 'prop-types';

const CharacterItem = ({ character }) => {
  const { name, level, skills, role } = character;

  return (
    <Card elevation={2}>
      <CardContent>
        <Grid container spacing={0} justify='space-between'>
          <Grid item xs={6}>
            <strong>{name}</strong>
          </Grid>
          <Grid item xs={6}>
            {role}
          </Grid>
          <Grid item xs={12}>
            Level: {level}
          </Grid>
          <Grid item xs={6}>
            {skills + ', '}
          </Grid>
          <Grid item xs={6}>
            <Button color='secondary' variant='contained'>
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
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
