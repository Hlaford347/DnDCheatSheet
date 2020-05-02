import React from 'react';
import Characters from '../characters/Characters';
import { Grid } from '@material-ui/core';
import Skills from '../characterDetails/skills/Skills';
import CharacterDetails from '../characterDetails/CharacterDetails';

const Character = () => {
  return (
    <Grid container spacing={3}>
      <Characters />
      <Grid item xs={2}>
        <CharacterDetails />
      </Grid>
      <Grid item xs={2}>
        <Skills />
      </Grid>
    </Grid>
  );
};

export default Character;
