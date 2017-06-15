export default {

  getUsername() {
    return localStorage.username;
  },

  setUsername(username) {
    localStorage.username = username;
  },

  getAuthToken() {
    return localStorage.authToken;
  },

  setAuthToken(authToken) {
    localStorage.authToken = authToken;
  }

};