import {
  BELLOTERO_API_ERRORS
} from '../actions/types';

const INTIAL_STATE = {
  isError: null,
  error: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case BELLOTERO_API_ERRORS:
      return { ...state, isError: true, error: action.payload };
    case BELLOTERO_API_SUCCESS:
      return { ...state, isError: false, error: null };
    default:
      return state;
  }
};