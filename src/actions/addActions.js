import {ADD_CANCEL,ADD_DONE, ADD, NAME_CHANGE, TIME_CHANGE, DATE_CHANGE, MORE_INFO_CHANGE} from './types';

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

export const nameChange = ({text}) => {


    return {
        type: NAME_CHANGE,
        payload: text
    }

};

export const timeChange = (time) => {
    return {
        type: TIME_CHANGE,
        payload: time
    }
};

export const dateChange = (date) => {
    return {
        type: DATE_CHANGE,
        payload: date
    }
};

export const moreInfoChange = ({text}) => {
    return {
        type: MORE_INFO_CHANGE,
        payload: text
    }
};