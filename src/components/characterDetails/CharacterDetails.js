import React, { useState, useContext, useEffect } from 'react';
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Button,
  Box,
  Grid,
} from '@material-ui/core';
import Roles from '../../data/classes';
import Races from '../../data/races';
import { makeStyles } from '@material-ui/styles';
import CharacterContext from '../../context/character/characterContext';
import AbilityScores from './abilities/AbilityScores';
import Skills from './skills/Skills';

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
  const races = Object.getOwnPropertyNames(Races);
  const roles = [];
  Roles.forEach((role) => {
    roles.push(role.name);
  });

  const [subraces, setSubraces] = useState([]);
  const classes = useStyles();

  const characterContext = useContext(CharacterContext);

  const {
    addCharacter,
    current,
    updateCharacter,
    setCurrent,
  } = characterContext;

  useEffect(() => {
    if (current !== null) {
      setChar(current);
    } else {
      setChar({
        name: '',
        race: '',
        subrace: '',
        level: '',
        role: '',
        skills: [
          {
            name: 'Acrobatics',
            proficient: false,
            expert: false,
          },
          {
            name: 'Animal handling',
            proficient: false,
            expert: false,
          },
          {
            name: 'Arcana',
            proficient: false,
            expert: false,
          },
          {
            name: 'Athletics',
            proficient: false,
            expert: false,
          },
          {
            name: 'Deception',
            proficient: false,
            expert: false,
          },
          {
            name: 'History',
            proficient: false,
            expert: false,
          },
          {
            name: 'Insight',
            proficient: false,
            expert: false,
          },
          {
            name: 'Intimidation',
            proficient: false,
            expert: false,
          },
          {
            name: 'Investigation',
            proficient: false,
            expert: false,
          },
          {
            name: 'Medicine',
            proficient: false,
            expert: false,
          },
          {
            name: 'Nature',
            proficient: false,
            expert: false,
          },
          {
            name: 'Perception',
            proficient: false,
            expert: false,
          },
          {
            name: 'Performance',
            proficient: false,
            expert: false,
          },
          {
            name: 'Persuasion',
            proficient: false,
            expert: false,
          },
          {
            name: 'Religion',
            proficient: false,
            expert: false,
          },
          {
            name: 'Sleight of hand',
            proficient: false,
            expert: false,
          },
          {
            name: 'Stealth',
            proficient: false,
            expert: false,
          },
          {
            name: 'Survival',
            proficient: false,
            expert: false,
          },
        ],
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        maxHP: 8,
        armorClass: 10,
      });
    }
  }, [characterContext, current]);

  const [nameInvalid, setNameValid] = useState(false);
  const [raceInvalid, setRaceValid] = useState(false);
  const [levelInvalid, setLevelValid] = useState(false);
  const [roleInvalid, setRoleValid] = useState(false);
  const [hpInvalid, setHpValid] = useState(false);

  const [char, setChar] = useState({
    name: '',
    race: '',
    subrace: '',
    level: '',
    role: '',
    skills: [
      {
        name: 'Acrobatics',
        proficient: false,
        expert: false,
      },
      {
        name: 'Animal handling',
        proficient: false,
        expert: false,
      },
      {
        name: 'Arcana',
        proficient: false,
        expert: false,
      },
      {
        name: 'Athletics',
        proficient: false,
        expert: false,
      },
      {
        name: 'Deception',
        proficient: false,
        expert: false,
      },
      {
        name: 'History',
        proficient: false,
        expert: false,
      },
      {
        name: 'Insight',
        proficient: false,
        expert: false,
      },
      {
        name: 'Intimidation',
        proficient: false,
        expert: false,
      },
      {
        name: 'Investigation',
        proficient: false,
        expert: false,
      },
      {
        name: 'Medicine',
        proficient: false,
        expert: false,
      },
      {
        name: 'Nature',
        proficient: false,
        expert: false,
      },
      {
        name: 'Perception',
        proficient: false,
        expert: false,
      },
      {
        name: 'Performance',
        proficient: false,
        expert: false,
      },
      {
        name: 'Persuasion',
        proficient: false,
        expert: false,
      },
      {
        name: 'Religion',
        proficient: false,
        expert: false,
      },
      {
        name: 'Sleight of hand',
        proficient: false,
        expert: false,
      },
      {
        name: 'Stealth',
        proficient: false,
        expert: false,
      },
      {
        name: 'Survival',
        proficient: false,
        expert: false,
      },
    ],
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    maxHP: 8,
    armorClass: 10,
  });

  const { name, race, subrace, level, role, skills, maxHP, armorClass } = char;

  const handleChange = (e) => {
    setChar({ ...char, [e.target.name]: e.target.value });
  };

  const handleRaceChange = (e) => {
    setSubraces(Races[e.target.value]);
    setChar({ ...char, race: e.target.value, subrace: '' });
  };

  const handleValidation = () => {
    setNameValid(name === '');
    setRaceValid(race === '');
    setLevelValid(level === '');
    setRoleValid(role === '');
    setHpValid(maxHP === '');
  };

  const handleButtonPress = (e) => {
    // For changing skills on a player
    const skillToAdd = e.target.innerText;
    checkSkills(skillToAdd);
  };

  const checkSkills = (skill) => {
    let newSkills = skills;
    let indexOfSkill;
    const currentSkill = newSkills.filter((sk, index) => {
      if (sk.name === skill) {
        indexOfSkill = index;
      }
      return sk.name === skill;
    })[0];

    if (!currentSkill.proficient && !currentSkill.expert) {
      newSkills[indexOfSkill].proficient = true;
    } else if (currentSkill.proficient) {
      newSkills[indexOfSkill].expert = true;
      newSkills[indexOfSkill].proficient = false;
    } else {
      newSkills[indexOfSkill].expert = false;
    }

    setChar({ ...char, skills: newSkills });
    console.log(char);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handleValidation();
    if (
      !(
        name === '' ||
        level === '' ||
        role === '' ||
        race === '' ||
        maxHP === ''
      )
    ) {
      if (current === null) {
        addCharacter(char);
      } else {
        updateCharacter(char);
      }
    }
    setCurrent(char);
  };

  return (
    <Box p={2}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <FormGroup>
            <FormControl className={classes.formControl}>
              <TextField
                required
                error={nameInvalid}
                id='name'
                name='name'
                label='Name'
                onChange={handleChange}
                value={name}
              />
            </FormControl>

            <FormControl className={classes.formControl} error={raceInvalid}>
              <InputLabel id='race-select-label'>Race</InputLabel>
              <Select
                required
                labelId='race-select-label'
                id='race-select'
                name='race'
                value={race}
                onChange={handleRaceChange}
              >
                {races.map((race, index) => {
                  return (
                    <MenuItem key={index} value={race}>
                      {race}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {subraces.length > 0 && (
              <FormControl className={classes.formControl}>
                <InputLabel id='subrace-select-label'>Subrace</InputLabel>
                <Select
                  required
                  labelId='subrace-select-label'
                  id='subrace-select'
                  name='subrace'
                  value={subrace}
                  onChange={handleChange}
                >
                  {subraces.map((subrace, index) => {
                    return (
                      <MenuItem key={index} value={subrace}>
                        {subrace}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}

            <FormControl className={classes.formControl} error={levelInvalid}>
              <InputLabel id='level-select-label'>Level</InputLabel>
              <Select
                required
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
            <FormControl className={classes.formControl} error={roleInvalid}>
              <InputLabel id='role-select-label'>Class</InputLabel>
              <Select
                required
                labelId='role-select-label'
                id='role-select'
                name='role'
                value={role}
                onChange={handleChange}
              >
                {roles.map((role, index) => {
                  return (
                    <MenuItem key={index} value={role}>
                      {role}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                required
                type='number'
                error={hpInvalid}
                id='maxHP'
                name='maxHP'
                label='Max HP'
                onChange={handleChange}
                value={maxHP}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                type='number'
                id='armorClass'
                name='armorClass'
                label='Armor Class'
                onChange={handleChange}
                value={armorClass}
              />
            </FormControl>

            <Button variant='contained' onClick={onSubmit}>
              {current ? 'Save Edits' : 'Create New'}
            </Button>
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={1}>
          <AbilityScores
            handleChange={handleChange}
            character={char}
            levels={levels}
            classes={classes}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Skills character={char} handleButtonPress={handleButtonPress} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CharacterDetails;
