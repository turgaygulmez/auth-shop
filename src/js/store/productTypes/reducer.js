import { REDUCER_NAME, SET_PRODUCT_TYPES } from "./constants";

const initialState = {
  productTypes: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_TYPES:
      return {
        ...state,
        productTypes: action.payload
      };
    default:
      return state;
  }
};

const getState = (state) => {
  return state[REDUCER_NAME] || initialState;
};

export const selectProductTypes = (state) => getState(state).productTypes;
