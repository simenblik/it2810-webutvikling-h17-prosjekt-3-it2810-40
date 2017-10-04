import {HEADER_ALL, HEADER_DONE} from './types';

export const onDoneButton = () => {
    return {
        type: HEADER_DONE
    }
};

export const onAllButton = () => {
    return {
        type: HEADER_ALL
    }
};