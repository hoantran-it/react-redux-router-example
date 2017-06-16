var REST_VERSION = "/v1";

export default {
  URL_REST_BASE: "http://localhost:8088",
  REST_HEADERS: {
    USERNAME: "X-Auth-Username",
    PASSWORD: "X-Auth-Password",
    TOKEN: "X-Auth-Token"
  },
  REST_API: {
    SIGN_UP: REST_VERSION + "/authentication/sign-up",
    SIGN_IN: REST_VERSION + "/authentication/sign-in",
    SIGN_OUT: REST_VERSION + "/authentication/sign-out",
    USERS: REST_VERSION + "/users",
    TOPICS: REST_VERSION + "/topics",
    COMMENTS: REST_VERSION + "/comments"
  },
};