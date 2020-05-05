import React, { Fragment } from 'react';
import Characters from '../characters/Characters';
import { Grid, Box, Toolbar } from '@material-ui/core';
import Skills from '../characterDetails/skills/Skills';
import CharacterDetails from '../characterDetails/CharacterDetails';

const Character = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Characters />
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
