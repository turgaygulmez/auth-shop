import Api from "../../../service";
import { SET_LOADING, SET_ERROR, SET_PRODUCT_TYPES } from "./constants";

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

const setProductTypes = (payload) => ({
  type: SET_PRODUCT_TYPES,
  payload
});

export const getProductTypes = () => (dispatch) => {
  dispatch(setLoading(true));
  return Api.productTypes
    .get()
    .then((data) => {
      dispatch(setProductTypes(data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};
