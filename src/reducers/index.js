import { combineReducers } from 'redux';
import appReducer from './appReducer';
import testimonialReducer from './testimonialReducer';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  app: appReducer,
  testimonial: testimonialReducer
});