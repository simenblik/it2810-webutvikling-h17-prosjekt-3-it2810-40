import {ADD_CANCEL, ADD_DONE, ADD, NAME_CHANGE, TIME_CHANGE, DATE_CHANGE, MORE_INFO_CHANGE} from '../actions/types';
import moment from 'moment';

const INITIAL_STATE = {
    add: true,
    name: '',
    time: moment(),
    date: moment(),
    info: ''



};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_CANCEL:
            return {...state, add: false};
        case ADD_DONE:
            return {...state, add: false};
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
        default:
            return state;
    }
}