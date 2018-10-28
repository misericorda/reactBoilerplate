import { delay } from 'redux-saga'
import {put, takeEvery, all, call} from "redux-saga/effects";

import {AUTH_START_LOGIN, AUTH_START_LOGOUT, AUTH_SET_LOADING, AUTH_LOG_IN, AUTH_LOG_OUT} from "../actions/actionTypes";

const sendAuthRequest = (email, password) => {
  return new Promise((res) => {
    setTimeout(() => {
        return res("userId");
      }, 1500
    );
  });
};

function* tryLogIn({payload: {email, pwd}}) {
  yield put({type: AUTH_SET_LOADING, payload: true});
  try {
    let user = yield sendAuthRequest(email, pwd);
    yield put({type: AUTH_LOG_IN, payload: user});
  } catch (e) {
    console.log(e);
    yield put({type: AUTH_LOG_IN, payload: e, error: true});
  }

}

function* tryLogOut() {
  yield put({type: AUTH_SET_LOADING, payload: true});
  yield call(delay, 500);
  yield put({type: AUTH_LOG_OUT});
}

function* watchLogIn() {
  yield takeEvery(AUTH_START_LOGIN, tryLogIn);
}

function* watchLogOut() {
  yield takeEvery(AUTH_START_LOGOUT, tryLogOut);
}

export default function* auth() {
  yield all([
    watchLogIn(),
    watchLogOut()
  ]);
}