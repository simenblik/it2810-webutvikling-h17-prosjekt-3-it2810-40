import {DELETE_TODO} from './types';

export const onDeleteTodo = ({index, list}) => {

    return {
        type: DELETE_TODO,
        payload: list.slice(0, index).concat(list.slice(index + 1))
    }
};

//tror denne kan brukes til DONE
//const newList = list.splice((index),1);