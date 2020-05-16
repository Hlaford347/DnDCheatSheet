import React, { useReducer } from 'react';
import CharacterContext from './characterContext';
import characterReducer from './characterReducer';
import {
  ADD_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
  CHARACTER_ERROR,
  GET_CHARACTERS,
} from '../types';
import axios from 'axios';

const CharacterState = (props) => {
  const initialState = {
    characters: [],
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  // Get characters
  const getCharacters = async () => {
    try {
      const res = await axios.get('/api/players');

      dispatch({ type: GET_CHARACTERS, payload: res.data });
    } catch (err) {
      dispatch({ type: CHARACTER_ERROR, payload: err.response.msg });
    }
  };

  // Add Character
  const addCharacter = async (character) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/players', character, config);

      dispatch({ type: ADD_CHARACTER, payload: res.data });
    } catch (err) {
      dispatch({ type: CHARACTER_ERROR, payload: err.response.msg });
    }
  };

  // Update Current Character
  const updateCharacter = async (character) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/players/${character._id}`,
        character,
        config
      );

      dispatch({ type: UPDATE_CHARACTER, payload: res.data });
    } catch (err) {
      dispatch({ type: CHARACTER_ERROR, payload: err.response.msg });
    }
  };

  // Delete Current Character
  const deleteCharacter = async (id) => {
    try {
      // eslint-disable-next-line
      const res = await axios.delete(`/api/players/${id}`);

      dispatch({ type: DELETE_CHARACTER, payload: id });
    } catch (err) {
      dispatch({ type: CHARACTER_ERROR, payload: err.response.msg });
    }
  };

  // Set Current Character
  const setCurrent = (character) => {
    dispatch({ type: SET_CURRENT, payload: character });
  };

  // Clear Current Character
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        current: state.current,
        error: state.error,
        getCharacters,
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
