import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import CharacterContext from '../../context/character/characterContext';
import Classes from '../../data/classes';

// Generates proficiency values based on the level input
const getProficiencyValue = (level) => {
  return Math.floor((7 + level) / 4);
};

// Generates Ability Modifier values based on the ability score input
const getAbilityModifier = (abilityScore) => {
  return Math.floor((abilityScore - 10) / 2);
};

const SpellcastingAbility = () => {
  const characterContext = useContext(CharacterContext);
  const { characters } = characterContext;
  const rows = [];
  const createData = (name, spellcastingAbility, spellcastingDC) => {
    return { name, spellcastingAbility, spellcastingDC };
  };

  characters.forEach((character) => {
    const classObj = Classes.filter((role) => {
      return role.name === character.role;
    });

    if (classObj[0].spellcastingAbility !== null) {
      rows.push(
        createData(
          character.name,
          classObj[0].spellcastingAbility,
          8 +
            getProficiencyValue(character.level) +
            getAbilityModifier(character[classObj[0].spellcastingAbility])
        )
      );
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='passive skill table'>
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell align='left'>Spellcasting Ability</TableCell>
            <TableCell align='left'>Spellcasting DC</TableCell>
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
                  {row.spellcastingAbility}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {row.spellcastingDC}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SpellcastingAbility;
