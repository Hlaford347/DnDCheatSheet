import React, { useState, useContext } from 'react';
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Button,
  Box,
} from '@material-ui/core';
import Roles from '../../data/classes';
import { makeStyles } from '@material-ui/styles';
import CharacterContext from '../../context/character/characterContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CharacterDetails = () => {
  const levels = Array.from(new Array(20), (x, i) => i + 1);

  const abilitiesList = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
  ];
  const classes = useStyles();

  const characterContext = useContext(CharacterContext);

  const { addCharacter, setCharacter } = characterContext;

  const [char, setChar] = useState({
    name: '',
    level: '',
    role: '',
    skills: [],
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const {
    name,
    level,
    role,
    skills,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  } = char;

  const handleChange = (e) => {
    setChar({ ...char, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addCharacter(char);
    setChar({
      name: '',
      level: 1,
      role: 'Fighter',
      skills: [],
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    });
  };

  return (
    <Box p={2}>
      <FormGroup>
        <h2>Add Player Character</h2>
        <FormControl className={classes.formControl}>
          <TextField
            id='name'
            name='name'
            label='Name'
            onChange={handleChange}
            value={name}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id='level-select-label'>Level</InputLabel>
          <Select
            labelId='level-select-label'
            id='level-select'
            name='level'
            value={level}
            onChange={handleChange}
          >
            {levels.map((level, index) => {
              return (
                <MenuItem key={index} value={level}>
                  {level}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='role-select-label'>Class</InputLabel>
          <Select
            labelId='role-select-label'
            id='role-select'
            name='role'
            value={role}
            onChange={handleChange}
          >
            {Roles.map((role, index) => {
              return (
                <MenuItem key={index} value={role}>
                  {role}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        {abilitiesList.map((ability) => {
          return (
            <FormControl className={classes.formControl}>
              <InputLabel id={`${ability.toLowerCase()}-select-label`}>
                {ability}
              </InputLabel>
              <Select
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
                    <MenuItem key={index} value={level}>
                      {level}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          );
        })}
        <Button variant='contained' onClick={onSubmit}>
          Create New
        </Button>
      </FormGroup>
    </Box>
  );
};

export default CharacterDetails;
