import axios from "axios";
import {userAction} from "actions/actionTypes";
import localStorage from "utils/LocalStorage";
import Constants from "utils/Constants";

export const loginSuccess = (userInfo, loggedIn) => {
  return {
    type: userAction.LOG_IN_SUCCESS,
    userInfo,
    loggedIn,
    isLoading: false
  }
};

export const login = (username, password) => {

  axios.defaults.baseURL = Constants.URL_REST_BASE;
  axios.defaults.headers.common[Constants.REST_HEADERS.USERNAME] = username;
  axios.defaults.headers.common[Constants.REST_HEADERS.PASSWORD] = password;

  return (dispatch) => {
    return axios.post(Constants.REST_API.LOGIN)
      .then(response => {
        localStorage.setAuthToken(response.data.authToken)
        dispatch(loginSuccess({ userInfo: response.data.userInfo, loggedIn: true }))
      })
      .catch(error => {
        throw(error);
      });
  };

};