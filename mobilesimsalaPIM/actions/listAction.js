import { DELETE_TODO, DONE_TODO, BUTTON_DONE_DELTE } from './types';
import { StyleSheet, Text, View } from 'react-native';

export const onDeleteTodo = ({ index, list }) => {
  return {
    type: DELETE_TODO,
    payload: list.slice(0, index).concat(list.slice(index + 1)),
  };
};

export const onDeleteDone = ({ index, list }) => {
  return {
    type: BUTTON_DONE_DELTE,
    payload: list.slice(0, index).concat(list.slice(index + 1)),
  };
};

export const onDoneTodo = ({ index, list }) => {
  return {
    type: DONE_TODO,
    payloadDone: list[index],
    payloadToDo: list.slice(0, index).concat(list.slice(index + 1)),
  };
};

//tror denne kan brukes til DONE
//const newList = ;
