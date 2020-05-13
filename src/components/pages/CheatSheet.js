import React, { Fragment } from 'react';
import SheetDetails from '../cheatSheet/SheetDetails';
import { Grid, Box, Paper } from '@material-ui/core';
import Players from '../cheatSheet/players/Players';
import SkillsChart, { PassiveSkills } from '../cheatSheet/SkillsChart';
import { makeStyles } from '@material-ui/styles';
import SavingThrows from '../cheatSheet/SavingThrows';
import Languages from '../cheatSheet/Languages';

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
  gridRow: {
    marginTop: '0.25rem',
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
          <Grid container item md={10} spacing={1} className={classes.gridRow}>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={12} md={4}>
                <Paper className={classes.chartCard}>
                  <h2 className={classes.chartHeader}>Passive Skills</h2>
                  <PassiveSkills />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.chartCard}>
                  <h2 className={classes.chartHeader}>Known Languages</h2>
                  <Languages />
                </Paper>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={12} md={4}>
                <Paper className={classes.chartCard}>
                  <h2 className={classes.chartHeader}>Ability Scores</h2>
                  <SheetDetails colorsArray={colorsArray} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.chartCard}>
                  <h2 className={classes.chartHeader}>Skill Coverage</h2>
                  <SkillsChart colorsArray={colorsArray} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.chartCard}>
                  <h2 className={classes.chartHeader}>Saving Throws</h2>
                  <SavingThrows colorsArray={colorsArray} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CheatSheet;
