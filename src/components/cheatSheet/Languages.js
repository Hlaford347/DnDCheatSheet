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

const Languages = () => {
  const characterContext = useContext(CharacterContext);
  const { characters } = characterContext;
  const rows = [];
  const createData = (name, languages) => {
    return { name, languages };
  };

  characters.forEach((character) => {
    rows.push(createData(character.name, character.languages.join(', ')));
  });
  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='passive skill table'>
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell align='left'>Languages</TableCell>
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
                  {row.languages}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Languages;
