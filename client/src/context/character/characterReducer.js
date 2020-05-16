import {
  ADD_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
  CHARACTER_ERROR,
  GET_CHARACTERS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
        loading: false,
      };
    case UPDATE_CHARACTER:
      return {
        ...state,
        characters: state.characters.map((character) =>
          character._id === action.payload._id ? action.payload : character
        ),
        loading: false,
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character._id !== action.payload
        ),
        loading: false,
      };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    case CHARACTER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
