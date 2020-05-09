import React, { useReducer } from 'react';
import CharacterContext from './characterContext';
import characterReducer from './characterReducer';
import {
  ADD_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
} from '../types';
import { uuid } from 'uuidv4';

const CharacterState = (props) => {
  const initialState = {
    characters: [
      {
        id: 1,
        name: 'Player 1',
        race: 'Dwarf',
        subrace: 'Hill dwarf',
        level: 2,
        role: 'Fighter',
        skills: [
          {
            name: 'Acrobatics',
            proficient: true,
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
            proficient: true,
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
      },
      {
        id: 2,
        name: 'Player 2',
        race: 'Gnome',
        subrace: 'Rock gnome',
        level: 3,
        role: 'Ranger',
        skills: [
          {
            name: 'Acrobatics',
            proficient: false,
            expert: false,
          },
          {
            name: 'Animal handling',
            proficient: true,
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
            proficient: true,
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
      },
      {
        id: 3,
        name: 'Player 3',
        race: 'Elf',
        subrace: 'Wood elf',
        level: 2,
        role: 'Druid',
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
            proficient: true,
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
            proficient: true,
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
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  // Add Character
  const addCharacter = (character) => {
    character.id = uuid();
    dispatch({ type: ADD_CHARACTER, payload: character });
  };

  // Set Current Character
  const setCurrent = (character) => {
    dispatch({ type: SET_CURRENT, payload: character });
  };

  // Clear Current Character
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Current Character
  const updateCharacter = (character) => {
    dispatch({ type: UPDATE_CHARACTER, payload: character });
  };

  // Delete Current Character
  const deleteCharacter = (id) => {
    dispatch({ type: DELETE_CHARACTER, payload: id });
  };

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        current: state.current,
        addCharacter,
        updateCharacter,
        deleteCharacter,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
