import React, { Fragment } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const AbilityScores = ({ handleChange, character, levels, classes }) => {
  const abilitiesList = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
  ];

  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  } = character;

  return (
    <Fragment>
      {abilitiesList.map((ability, index) => {
        return (
          <FormControl className={classes.formControl} key={index}>
            <InputLabel id={`${ability.toLowerCase()}-select-label`}>
              {ability}
            </InputLabel>
            <Select
              required
              labelId={`${ability.toLowerCase()}-select-label`}
              id={`${ability.toLowerCase()}-select`}
              name={`${ability.toLowerCase()}`}
              value={
                ability === 'Strength'
                  ? strength
                  : ability === 'Dexterity'
                  ? dexterity
                  : ability === 'Constitution'
                  ? constitution
                  : ability === 'Intelligence'
                  ? intelligence
                  : ability === 'Wisdom'
                  ? wisdom
                  : charisma
              }
              onChange={handleChange}
            >
              {levels.map((level, index) => {
                return (
                  <MenuItem required key={index} value={level}>
                    {level}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        );
      })}
    </Fragment>
  );
};

AbilityScores.propTypes = {
  handleChange: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  levels: PropTypes.array.isRequired,
  classes: PropTypes.object,
};

AbilityScores.defaultProps = {
  handleChange: () => {},
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
  levels: [],
  classes: {},
};

export default AbilityScores;
