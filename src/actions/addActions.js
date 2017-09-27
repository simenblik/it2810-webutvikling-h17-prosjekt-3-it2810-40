import {ADD_CANCEL,ADD_DONE, ADD} from './types';

export const cancel = () => {
    return {
        type: ADD_CANCEL
    }
};

export const add = () => {
    return {
        type: ADD
    }
};

export const done = () => {
    return {
        type: ADD_DONE
    }
};