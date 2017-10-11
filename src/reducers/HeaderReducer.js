import { HEADER_ALL, HEADER_DONE } from '../actions/types.js';

const INITIAL_STATE = {
  allButton: true,
  doneButton: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HEADER_ALL:
      return { ...state, allButton: true, doneButton: false };
    case HEADER_DONE:
      return { ...state, allButton: false, doneButton: true };
    default:
      return state;
  }
};
