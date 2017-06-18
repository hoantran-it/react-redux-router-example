import axios from "axios";
import {browserHistory} from "react-router";
import {userAction} from "actions/actionTypes";
import localStorage from "utils/LocalStorage";
import Constants from "utils/Constants";
import {postApi} from "services/restService";


export const authenticateSuccess = (userInfo, signedIn) => {
  return {
    type: userAction.AUTHENTICATE_SUCCESS,
    userInfo,
    signedIn,
    isLoading: false
  }
};

export const signIn = (username, password) => {

  axios.defaults.baseURL = Constants.URL_REST_BASE;
  axios.defaults.headers.common[Constants.REST_HEADERS.USERNAME] = username;
  axios.defaults.headers.common[Constants.REST_HEADERS.PASSWORD] = password;

  return (dispatch) => {
    return axios.post(Constants.REST_API.SIGN_IN)
      .then(response => {
        localStorage.setAuthToken(response.data.authToken);
        dispatch(authenticateSuccess({ userInfo: response.data.userInfo, signedIn: true }));
      })
      .catch(error => {
        throw(error);
      });
  };

};

export const signUp = (userData) => {
  return (dispatch) => {
    postApi((response) => {
      localStorage.setAuthToken(response.data.authToken);
      dispatch(authenticateSuccess({ userInfo: response.data.userInfo, signedIn: true }));
      browserHistory.goBack();
    }, Constants.REST_API.SIGN_UP, userData);
  };
};

export const signOut = () => {
  return (dispatch) => {
    postApi((response) => {
      localStorage.setAuthToken("");
      dispatch(authenticateSuccess({ userInfo: "", signedIn: false }));
    }, Constants.REST_API.SIGN_OUT, {}, true);
  };
};