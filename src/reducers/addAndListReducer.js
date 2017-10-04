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
    BUTTON_DONE_DELTE} from '../actions/types';

import moment from 'moment';

const INITIAL_STATE = {
    add: true,
    name: "",
    time: moment(),
    date: moment(),
    info: "",
    todoList: [],
    todoListDone: []



};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_CANCEL:
            return {...state, add: false, name: '', info: ''};
        case ADD_DONE:
            return {...state, add: false, todoList: [...state.todoList, action.payload], name: '', info: ''};
        case ADD:
            return {...state, add: true};
        case NAME_CHANGE:
            return {...state, name: action.payload};
        case TIME_CHANGE:
            return {...state, time: action.payload};
        case DATE_CHANGE:
            return {...state, date: action.payload};
        case MORE_INFO_CHANGE:
            return {...state, info: action.payload};
        case DELETE_TODO:
            return {...state, todoList: action.payload};
        case DONE_TODO:
            return {...state,
                todoListDone: [...state.todoListDone, action.payloadDone],
                todoList: action.payloadToDo};
        case BUTTON_DONE_DELTE:
            return {...state, todoListDone: action.payload};
        default:
            return state;
    }
}

