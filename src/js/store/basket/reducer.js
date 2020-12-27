import { REDUCER_NAME, SET_BASKET, APPEND_BASKET } from "./constants";

const initialState = {
  basket: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASKET:
      return {
        ...state,
        basket: action.payload
      };
    case APPEND_BASKET:
      return {
        ...state,
        basket: [...state.basket, ...action.payload]
      };
    default:
      return state;
  }
};

const getState = (state) => {
  return state[REDUCER_NAME] || initialState;
};

export const selectBasket = (state) => getState(state).basket;
