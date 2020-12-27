import Api from "../../../service";
import {
  SET_LOADING,
  SET_ERROR,
  SET_FILTERS,
  SET_PRODUCTS,
  RESET_FILTERS
} from "./constants";

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});

const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload
  };
};

const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
});

export const setFilters = (payload) => ({
  type: SET_FILTERS,
  payload
});

export const resetFilters = (payload) => ({
  type: RESET_FILTERS,
  payload
});

export const getProducts = (data) => (dispatch) => {
  dispatch(setLoading(true));
  return Api.products
    .get(data)
    .then((data) => {
      dispatch(setProducts(data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};
