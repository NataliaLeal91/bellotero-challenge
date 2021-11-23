import { BELLOTERO_API_TESTIMONIAL } from '../actions/types';

const INTIAL_STATE = {
  testimonials: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case BELLOTERO_API_TESTIMONIAL:
      return { ...state, testimonials: action.payload };
    default:
      return state;
  }
};
