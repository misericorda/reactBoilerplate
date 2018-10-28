import {createReducer} from "redux-create-reducer";
import {
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  AUTH_SET_LOADING
} from "../actions/actionTypes";

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

export default createReducer(initialState, {
  [AUTH_LOG_IN](state, action) {
    return action.error
      ? {...state, error: action.payload.message, isLoading: false}
      : {...state, user: action.payload, error: null, isLoading: false};
  },
  [AUTH_LOG_OUT](state) {
    return {...state, user: initialState.user, isLoading: false};
  },
  [AUTH_SET_LOADING](state, action) {
    return {...state, isLoading: action.payload};
  },
});
