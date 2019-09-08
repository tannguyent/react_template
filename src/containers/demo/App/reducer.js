/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';

// The initial state of the App
export const initialState = {
  currentUser: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        break;
      case LOGIN_SUCCESS:
        draft.currentUser = action.data;
        break;
      case LOGIN_FAILURE:
        break;
      case LOGOUT:
        break;
    }
  });

export default appReducer;
