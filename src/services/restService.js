import axios from "axios";
import localStorage from "utils/LocalStorage";
import Constants from "utils/Constants";

export const getApi = (cbFunc, restUrl, requiredToken = false) => {
  axios.defaults.baseURL = Constants.URL_REST_BASE;
  if (requiredToken) {
    axios.defaults.headers.common[Constants.REST_HEADERS.TOKEN] = localStorage.getAuthToken();
  }

  return axios.get(restUrl)
    .then(response => {
      cbFunc(response);
    })
    .catch(error => {
      throw(error);
    });
};

export const postApi = (cbFunc, restUrl, data, requiredToken = false) => {
  axios.defaults.baseURL = Constants.URL_REST_BASE;
  if (requiredToken) {
    axios.defaults.headers.common[Constants.REST_HEADERS.TOKEN] = localStorage.getAuthToken();
  }

  return axios.post(restUrl, data)
    .then(response => {
      cbFunc(response);
    })
    .catch(error => {
      throw(error);
    });
};
