import React from 'react';
import Characters from '../characters/Characters';
import { Grid } from '@material-ui/core';
import CharacterDetails from '../characterDetails/CharacterDetails';

const Character = () => {
  return (
    <div>
      <Characters />
      <Grid container spacing={0}>
        <CharacterDetails />
      </Grid>
    </div>
  );
};

export default Character;
