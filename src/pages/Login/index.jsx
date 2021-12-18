/* eslint-disable */

import React from "react";
import { useDispatch } from "react-redux";
import { history } from "../../redux/configureStore";
import { useForm } from "react-hook-form";

//css
import "./login.modules.css";

const Login = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(userActions.loginAPI(data));
  };

  const { Kakao } = window;

  const loginWithKakao = () => {
    // 카카오 로그인
    Kakao.Auth.login({
      success: authObj => {
        console.log(authObj);

        // 유저정보 요청코드
        Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["properties.profile_image", "properties.nickname"],
          },
          success: async function (res) {
            const user = {
              id: res.id,
              image: res.properties.profile_image,
              nickname: res.properties.nickname,
            };
            const data = await apis.kakaologin(user);
            const token = data.data.token;
            if (token) {
              localStorage.setItem("token", token);
              dispatch(userActions.getUserAPI());
              window.location.replace("/");
            } else {
              window.alert("로그인에 실패했습니다.");
            }
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
    });
  };

  return (
    <React.Fragment>
      <div className="login__wrapper">
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <input
            className="login__input"
            type="email"
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: "이메일을 입렵해주세요.",
            })}
          ></input>
          {errors.email && <div>{errors.email.message}</div>}
          <input
            className="login__input"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
          ></input>
          {errors.password && <div>{errors.password.message}</div>}
          <button
            className="login__button"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            로그인 하기
          </button>
          <button
            className="login__button"
            src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            onClick={loginWithKakao}
          >
            카카오 로그인
          </button>
        </form>
        <p>
          아직 회원이 아니신가요?{" "}
          <span
            className="login__signup__button"
            onClick={() => history.push("/signup")}
          >
            회원가입
          </span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Login;
