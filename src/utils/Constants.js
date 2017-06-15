var REST_VERSION = "/v1";

export default {
  URL_REST_BASE: "http://localhost:8088",
  REST_HEADERS: {
    USERNAME: "X-Auth-Username",
    PASSWORD: "X-Auth-Password",
    TOKEN: "X-Auth-Token"
  },
  REST_API: {
    LOGIN: REST_VERSION + "/authentication/login",
    USERS: REST_VERSION + "/users",
    TOPICS: REST_VERSION + "/topics",
    COMMENTS: REST_VERSION + "/comments"
  },
};