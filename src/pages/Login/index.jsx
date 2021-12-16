/* eslint-disable */

import React from "react";
import { useDispatch } from "react-redux";
import { history } from "../../redux/configureStore";
import { useForm } from "react-hook-form";

//css
import "./login.modules.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    // dispatch(userActions.loginAPI(data));
  };

  return (
    <React.Fragment>
      <div>Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일을 입렵해주세요.",
          })}
        ></input>
        {errors.email && <div>{errors.email.message}</div>}
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
        ></input>
        {errors.password && <div>{errors.password.message}</div>}
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          로그인 하기
        </button>
        <button
        // src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        // onClick={loginWithKakao}
        >
          카카오 로그인
        </button>
      </form>
      <p>
        아직 회원이 아니신가요?{" "}
        <span
          onClick={() => history.push("/signup")}
          style={{ fontWeight: "bold", color: "black" }}
        >
          회원가입{" "}
        </span>
      </p>
    </React.Fragment>
  );
};

export default Login;
