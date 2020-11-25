import axios from "axios";

// export const LOGIN_URL = "api/auth/login";
// export const LOGIN_URL = "http://localhost:8000/api/user/login";

export const userToken = localStorage.getItem("userToken");

export const LOGIN_URL = "/login";

export const REGISTER_URL = "/register";
export const REQUEST_PASSWORD_URL = "/forgot-password";

export const ME_URL = `/profile?token=${userToken}`;

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password })

}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

// export function refreshToken() {
//   let currUser = JSON.parse(localStorage.getItem("user"));
// }

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
