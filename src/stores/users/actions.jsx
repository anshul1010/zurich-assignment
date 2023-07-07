import apiClient from "./../../config/index";
import { GET_USER_LIST, GET_USER_FAILURE } from "./actionTypes";

export function getUsers() {
  return (dispatch) => {
    dispatch({ type: GET_USER_LIST });
    apiClient
      .get(`/users`)
      .then(function (res) {
        dispatch({
          type: GET_USER_LIST,
          payload: res.data?.data,
        });
      })
      .catch(function (error) {
        const { response } = error;
        if (response !== undefined) {
          dispatch({
            type: GET_USER_FAILURE,
            payload: response?.data,
          });
        }
      });
  };
}
