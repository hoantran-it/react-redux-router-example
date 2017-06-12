import axios from "axios";
import {userAction} from "actions/actionTypes";
import localStorage from "LocalStorage";

export const loginSuccess = (userInfo, loggedIn) => {
  return {
    type: userAction.LOG_IN_SUCCESS,
    userInfo,
    loggedIn,
    isLoading: false
  }
};

export const login = (username, password) => {

  axios.defaults.baseURL = 'http://localhost:8088';
  axios.defaults.headers.common['X-Auth-Username'] = username;
  axios.defaults.headers.common['X-Auth-Password'] = password;

  return (dispatch) => {
    return axios.post('/v1/authentication/login')
      .then(response => {
        localStorage.setAuthToken(response.data.authToken)
        dispatch(loginSuccess({ userInfo: response.data.userInfo, loggedIn: true }))
      })
      .catch(error => {
        throw(error);
      });
  };

};