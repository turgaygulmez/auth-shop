import { REDUCER_NAME, SET_SELF, RESET_SELF } from "./constants";

const initialState = {
  profile: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELF:
      return {
        ...state,
        profile: action.payload
      };
    case RESET_SELF:
      return {
        ...state,
        profile: initialState.self
      };
    default:
      return state;
  }
};

const getState = (state) => {
  return state[REDUCER_NAME] || initialState;
};

export const selectProfile = (state) => getState(state).profile;
