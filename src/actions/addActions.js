import {ADD_CANCEL,
    ADD_DONE,
    ADD, NAME_CHANGE,
    TIME_CHANGE,
    DATE_CHANGE,
    MORE_INFO_CHANGE,
    NO_NAME,
    ERROR_DATE,
    ERROR_TIME} from './types';

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

export const doneAction = (todo) => {
    const { name} = todo;
    if(name.length == null || name.length === 0){
        return {
            type: NO_NAME
        }
    }else {

        return {
            type: ADD_DONE,
            payload: todo
        }
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
    console.log(date.date());
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