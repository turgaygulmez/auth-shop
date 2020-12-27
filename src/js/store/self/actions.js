import Api from "../../../service";
import { SET_LOADING, SET_ERROR, SET_SELF, RESET_SELF } from "./constants";

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

const setSelf = (payload) => ({
  type: SET_SELF,
  payload
});

export const resetSelf = (payload) => ({
  type: RESET_SELF,
  payload
});

export const getSelf = () => (dispatch) => {
  dispatch(setLoading(true));
  return Api.self
    .get()
    .then((data) => {
      dispatch(setSelf(data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
      throw error;
    });
};

export const login = (data) => (dispatch) => {
  dispatch(setLoading(true));
  return Api.authentication
    .authenticate(data)
    .then((data) => {
      dispatch(setSelf(data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};

export const logout = (data) => (dispatch) => {
  dispatch(setLoading(true));
  return Api.self
    .logout()
    .then(() => {
      dispatch(resetSelf());
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};
