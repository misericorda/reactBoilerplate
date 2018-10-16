export const APP_READY = "APP_READY";
export const TOGGLE_APP_READY = "TOGGLE_APP_READY";

// simple action
export const setAppReady = () => {
  return {
    type: APP_READY
  };
};
export const toggleAppReady = () => {
  return {
    type: TOGGLE_APP_READY
  };
};

// thunk action
export const delayAppReady = () => {
  return (dispatch) => {
    setTimeout(() => dispatch(setAppReady()), 1000);
  };
};




