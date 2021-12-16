/* eslint-disable */

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_server || "http://localhost:4000",
  withCredentials: true,
});

instance.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json; charset=utf=8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["authorization"] = getToken() ? `Bearer ${getToken()}` : "";
  config.headers.Accept = "application/json";
});

export const apis = {
  // 로그인
  logIn: user => instance.post("/api/login", user),
  // loginloginKakao: (token) => instance.post("http://localhost/kakao/callback?code=${code}", token),
  siginup: user => instance.post("api/signup", user),
  loginout: () => instance.get("api/logout"),
  checkEmail: email => instance.post("/checkemail", email),
  registerUser: user => instance.post("api/signup", user),
};
