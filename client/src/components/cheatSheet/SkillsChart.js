import React, { useContext } from 'react';
import CharacterContext from '../../context/character/characterContext';
import { Radar } from 'react-chartjs-2';
import SkillsList from '../../data/skills';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

// Generates Passive Skill Value
const createSkillValue = (character, skill) => {
  const proficiency = getProficiencyValue(character.level);
  const skillObj = character.skills.filter((sk) => {
    return sk.name === skill;
  });

  const skillListObj = SkillsList.filter((sk) => {
    return sk.name === skill;
  });

  const abilityModifier = getAbilityModifier(
    character[skillListObj[0].abilityScore]
  );

  if (skillObj[0].proficient) {
    return 10 + proficiency + abilityModifier;
  } else if (skillObj[0].expert) {
    return 10 + 2 * proficiency + abilityModifier;
  } else {
    return 10 + abilityModifier;
  }
};

// Generates proficiency values based on the level input
const getProficiencyValue = (level) => {
  return Math.floor((7 + level) / 4);
};

// Generates Ability Modifier values based on the ability score input
const getAbilityModifier = (abilityScore) => {
  return Math.floor((abilityScore - 10) / 2);
};

const SkillsChart = ({ colorsArray }) => {
  const characterContext = useContext(CharacterContext);

  const { characters } = characterContext;

  const chartData = {
    labels: [
      'Acrobatics',
      'Animal handling',
      'Arcana',
      'Athletics',
      'Deception',
      'History',
      'Insight',
      'Intimidation',
      'Investigation',
      'Medicine',
      'Nature',
      'Perception',
      'Performance',
      'Persuasion',
      'Religion',
      'Sleight of hand',
      'Stealth',
      'Survival',
    ],
    datasets: [],
  };

  const createPassiveSkillValuesObject = (character) => {
    const skillObj = [];
    chartData.labels.forEach((skill) => {
      skillObj.push(createSkillValue(character, skill));
    });
    return skillObj;
  };

  const createCharacterAbilityData = (character, index) => {
    const dataObj = {
      label: character.name,
      backgroundColor: `${colorsArray[index]} 0.2)`,
      borderColor: `${colorsArray[index]} 1)`,
      data: createPassiveSkillValuesObject(character),
    };

    return dataObj;
  };

  characters.forEach((character, index) => {
    chartData.datasets.push(createCharacterAbilityData(character, index));
  });

  return (
    <Radar
      data={chartData}
      height={200}
      width={200}
      options={{
        maintainAspectRatio: false,
        scale: { ticks: { suggestedMin: 0, suggestedMax: 20 } },
      }}
    />
  );
};

export const PassiveSkills = () => {
  const characterContext = useContext(CharacterContext);

  const { characters } = characterContext;

  const createData = (
    name,
    passivePerception,
    passiveInsight,
    passiveInvestigation
  ) => {
    return { name, passivePerception, passiveInsight, passiveInvestigation };
  };

  const rows = [];

  characters.forEach((character) => {
    rows.push(
      createData(
        character.name,
        createSkillValue(character, 'Perception'),
        createSkillValue(character, 'Insight'),
        createSkillValue(character, 'Investigation')
      )
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='passive skill table'>
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell align='left'>Perception</TableCell>
            <TableCell align='left'>Insight</TableCell>
            <TableCell align='left'>Investigation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {row.passivePerception}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {row.passiveInsight}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {row.passiveInvestigation}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillsChart;
