import {createReducer} from "redux-create-reducer";
import {
  APP_READY,
  TOGGLE_APP_READY
} from "../actions/app";

const initialState = {
  appReady: false,
};

export default createReducer(initialState, {
  [APP_READY](state) {
    return {...state, appReady: true};
  },
  [TOGGLE_APP_READY](state) {
    return {...state, appReady: !state.appReady};
  },
});
