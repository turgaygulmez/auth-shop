import Api from "../../../service";
import { SET_LOADING, SET_ERROR, SET_BASKET, APPEND_BASKET } from "./constants";

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

const setBasket = (payload) => ({
  type: SET_BASKET,
  payload
});

const appendBasket = (payload) => ({
  type: APPEND_BASKET,
  payload
});

export const getBasket = (data) => (dispatch) => {
  dispatch(setLoading(true));
  return Api.users
    .getBasket(data)
    .then((data) => {
      dispatch(setBasket(data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};

export const addBasket = (data) => (dispatch) => {
  dispatch(setLoading(true));
  return Api.baskets
    .create(data)
    .then((data) => {
      dispatch(appendBasket([data]));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};
