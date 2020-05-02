import {
  ADD_CHARACTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHARACTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case UPDATE_CHARACTER:
      return {
        ...state,
        characters: state.characters.map((character) =>
          character.id === action.payload.id ? action.payload : character
        ),
      };

    default:
      return state;
  }
};
