import React, { Fragment } from 'react';
import SheetDetails from '../cheatSheet/SheetDetails';
import { Grid, Box, Paper } from '@material-ui/core';
import Players from '../cheatSheet/players/Players';
import SkillsChart from '../cheatSheet/SkillsChart';
import { makeStyles } from '@material-ui/styles';
import SavingThrows from '../cheatSheet/SavingThrows';

const getRandomColor = () => {
  const o = Math.round,
    r = Math.random,
    s = 255;
  const color = `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)},`;
  return color;
};

const useStyles = makeStyles({
  chartCard: {
    marginTop: '0.5rem',
    padding: '0.5rem',
  },
  chartHeader: {
    textAlign: 'center',
  },
});

const CheatSheet = () => {
  const classes = useStyles();

  const colorsArray = [];

  const generateColorArray = (numberOfColors) => {
    for (let index = 0; index < numberOfColors; index++) {
      colorsArray.push(getRandomColor());
    }
  };

  generateColorArray(100);

  return (
    <Fragment>
      <Box p={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Players />
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.chartCard}>
              <h2 className={classes.chartHeader}>Ability Scores</h2>
              <SheetDetails colorsArray={colorsArray} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.chartCard}>
              <h2 className={classes.chartHeader}>Skill Coverage</h2>
              <SkillsChart colorsArray={colorsArray} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.chartCard}>
              <h2 className={classes.chartHeader}>Saving Throws</h2>
              <SavingThrows colorsArray={colorsArray} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CheatSheet;
