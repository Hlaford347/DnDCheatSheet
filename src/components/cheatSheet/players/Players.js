import React, { Fragment, useContext } from 'react';
import PlayerItem from './PlayerItem';
import CharacterContext from '../../../context/character/characterContext';
import { List } from '@material-ui/core';

const Players = () => {
  const characterContext = useContext(CharacterContext);

  const { characters } = characterContext;
  return (
    <Fragment>
      <List>
        {characters.map((character) => {
          return <PlayerItem character={character} key={character.id} />;
        })}
      </List>
    </Fragment>
  );
};

export default Players;
