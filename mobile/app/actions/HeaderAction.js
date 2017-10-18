import { HEADER_ALL, HEADER_DONE } from './Types';

export const onDoneButton = () => {
  return {
    type: HEADER_DONE,
  };
};

export const onAllButton = () => {
  return {
    type: HEADER_ALL,
  };
};
