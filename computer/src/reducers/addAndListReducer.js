import {
  ADD_CANCEL,
  ADD_DONE,
  ADD,
  NAME_CHANGE,
  TIME_CHANGE,
  DATE_CHANGE,
  MORE_INFO_CHANGE,
  DELETE_TODO,
  DONE_TODO,
  BUTTON_DONE_DELTE,
  NO_NAME,
} from '../actions/types.js';

import moment from 'moment';

const INITIAL_STATE = {
  add: false,
  name: '',
  time: moment(),
  date: moment(),
  info: '',
  todoList: [],
  todoListDone: [],
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CANCEL:
      return { ...state, add: false, name: '', info: '', error: '' };
    case ADD_DONE:
      return {
        ...state,
        add: false,
        todoList: [...state.todoList, action.payload],
        name: '',
        info: '',
        error: '',
      };
    case ADD:
      return { ...state, add: true, error: '' };
    case NAME_CHANGE:
      return { ...state, name: action.payload, error: '' };
    case TIME_CHANGE:
      return { ...state, time: action.payload };
    case DATE_CHANGE:
      return { ...state, date: action.payload };
    case MORE_INFO_CHANGE:
      return { ...state, info: action.payload };
    case DELETE_TODO:
      return { ...state, todoList: action.payload };
    case NO_NAME:
      return { ...state, error: 'you need a name' };
    case DONE_TODO:
      return {
        ...state,
        todoListDone: [...state.todoListDone, action.payloadDone],
        todoList: action.payloadToDo,
      };
    case BUTTON_DONE_DELTE:
      return { ...state, todoListDone: action.payload };
    default:
      return state;
  }
};
