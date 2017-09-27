import {ADD_CANCEL, ADD_DONE, ADD} from '../actions/types';

const INITIAL_STATE = {
    add: true

};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_CANCEL:
            return {...state, add: false};
        case ADD_DONE:
            return {...state, add: false};
        case ADD:
            return {...state, add: true};
        default:
            return state;
    }
}