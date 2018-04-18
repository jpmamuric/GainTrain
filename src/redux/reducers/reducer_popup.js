import * as types from '../actions/types';

const INITIAL_STATE = {
  isOpen: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_POPUP:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state;
  }
}
