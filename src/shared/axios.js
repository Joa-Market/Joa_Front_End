/* eslint-disable */

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

instance.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json; charset=utf=8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  // config.headers["authorization"] = getToken() ? `Bearer ${getToken()}` : "";
  config.headers.Accept = "application/json";
  return config;
});

const postAxios = axios.create({
  baseURL: "http://localhost:4000/api/post",
  withCredentials: true,
});

postAxios.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json; charset=utf=8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  // config.headers["authorization"] = getToken() ? `Bearer ${getToken()}` : "";
  config.headers.Accept = "application/json";
  return config;
});

export const apis = {
  // 로그인
  logIn: user => instance.post("/login", user),
  // loginloginKakao: (token) => instance.post("http://localhost/kakao/callback?code=${code}", token),
  loginout: () => instance.get("/logout"),
  checkEmail: email => instance.post("/checkemail", email),
  registerUser: user => instance.post("/signup", user),

  //유저정보
  getUserdata: () => instance.get("/user"),
  postAdress: adress => instance.post("/user/adress", adress),

  //판매글정보
  addPost: post => postAxios.post("", post),
  getPost: () => postAxios.get(""),
  getPostDelete: id => postAxios.get(`/${id}`),
};
