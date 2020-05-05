import React from 'react';
import Characters from '../characters/Characters';
import { Grid } from '@material-ui/core';
import Skills from '../characterDetails/skills/Skills';
import CharacterDetails from '../characterDetails/CharacterDetails';

const Character = () => {
  return (
    <div>
      <Characters />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <CharacterDetails />
        </Grid>
        <Grid item xs={2}>
          <Skills />
        </Grid>
      </Grid>
    </div>
  );
};

export default Character;
