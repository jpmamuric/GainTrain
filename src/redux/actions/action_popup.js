import * as types from './types';

export const togglePopup = state => {
  return {
    type: types.TOGGLE_POPUP,
    payload: state
  }
};
