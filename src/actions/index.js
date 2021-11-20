
import axios from 'axios';

import {
  BELLOTERO_API_MENU,
  BELLOTERO_API_ERRORS,
  BELLOTERO_API_SUCCESS
} from './types';

export const fetchAppData = () => async (dispatch) => {
 
  await axios.get('json/app.json').then((res) => {

    dispatch({ type: BELLOTERO_API_MENU, payload: res.data.menu });
    dispatch({ type: BELLOTERO_API_SUCCESS, payload: null });
  }).catch((err) => {
    
    dispatch({ type: BELLOTERO_API_ERRORS, payload: err.response.data.error});
  });
};