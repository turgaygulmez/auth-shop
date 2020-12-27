import {
  REDUCER_NAME,
  SET_PRODUCTS,
  SET_FILTERS,
  RESET_FILTERS
} from "./constants";

const initialState = {
  products: [],
  filters: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case RESET_FILTERS:
      return {
        ...state,
        filters: initialState.filters
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

const getState = (state) => {
  return state[REDUCER_NAME] || initialState;
};

export const selectProducts = (state) => getState(state).products;
export const selectFilters = (state) => getState(state).filters;
