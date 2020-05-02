import React, { useReducer } from 'react';
import CharacterContext from './characterContext';
import characterReducer from './characterReducer';
import {
  ADD_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
} from '../types';
import Skills from '../../data/skills';
import Classes from '../../data/classes';
import { uuid } from 'uuidv4';

const CharacterState = (props) => {
  const initialState = {
    characters: [
      {
        id: 1,
        name: 'Player 1',
        level: 2,
        role: 'Fighter',
        skills: ['Acrobatics', 'Athletics'],
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
      },
      {
        id: 2,
        name: 'Player 2',
        level: 3,
        role: 'Ranger',
        skills: ['Stealth', 'Sleight of hand'],
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
      },
      {
        id: 3,
        name: 'Player 3',
        level: 2,
        role: 'Druid',
        skills: ['Animal handling', 'Perception'],
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
      },
    ],
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  // Add Character
  const addCharacter = (character) => {
    character.id = uuid();
    dispatch({ type: ADD_CHARACTER, payload: character });
  };

  // Set Current Character

  // Clear Current Character

  // Update Current Character
  const updateCharacter = (character) => {
    dispatch({ type: UPDATE_CHARACTER, payload: character });
  };

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        addCharacter,
        updateCharacter,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
