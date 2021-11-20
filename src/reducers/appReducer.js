import { BELLOTERO_API_MENU } from '../actions/types';

const INTIAL_STATE = {
  menu: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case BELLOTERO_API_MENU:
      return { ...state, menu: action.payload };
    default:
      return state;
  }
};
