import {ADD_CANCEL,ADD_DONE, ADD} from './types';

export const cancelAction = () => {
    return {
        type: ADD_CANCEL
    }
};

export const addAction = () => {
    return {
        type: ADD
    }
};

export const doneAction = () => {
    return {
        type: ADD_DONE
    }
};