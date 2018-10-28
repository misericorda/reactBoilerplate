import {AUTH_START_LOGIN, AUTH_START_LOGOUT} from "./actionTypes"


export  const authLogIn = (email, pwd) => ({
  type: AUTH_START_LOGIN,
  payload: {
    email,
    pwd  }
});

export  const authLogOut = () => ({
  type: AUTH_START_LOGOUT,
});





