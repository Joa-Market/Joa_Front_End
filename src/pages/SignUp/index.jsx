import React from "react";
// redux
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/modules/user";
// css
import "./signup.modules.css";
// hook
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(userActions.signUpAPI(data));
  };

  return (
    <React.Fragment>
      <form className="Wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="input__wrapper">
          <label className="label">이메일</label>
          <input
            className="input"
            type="email"
            placeholder="example@joamarket.com"
            {...register("email", {
              required: {
                value: true,
                message: "이메일을 입력해주세요.",
              },
              pattern: {
                value:
                  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                message: "이메일 형식이 올바르지 않습니다.",
              },
            })}
          />
          {errors && <p>{errors.email?.message}</p>}
        </div>
        <div className="input__wrapper">
          <label className="label">닉네임</label>
          <input
            className="input"
            type="text"
            placeholder="3~8자의 닉네임을 입력해주세요."
            {...register("nickname", {
              required: {
                value: true,
                message: "닉네임을 입력해주세요.",
              },
              minLength: {
                value: 3,
                message: "최소 3자 이상의 닉네임을 입력해주세요.",
              },
              maxLength: {
                value: 8,
                message: "8자 이하의 닉네임만 사용가능합니다.",
              },
              pattern: {
                value: /^[가-힣A-Za-z0-9]+$/,
                message: "닉네임에는 한글, 영문, 숫자만 사용가능합니다.",
              },
            })}
          />
          {errors && <p>{errors.nickname?.message}</p>}
        </div>
        <div className="input__wrapper">
          <label className="label">비밀번호</label>
          <input
            className="input"
            type="password"
            placeholder="영문, 숫자를 혼용하여 8~16자를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "최소 8자 이상의 비밀번호를 입력해주세요.",
              },
              maxLength: {
                value: 16,
                message: "16자 이하의 비밀번호만 사용가능합니다.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                message: "영문, 숫자를 혼용하여 입력해주세요.",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="input__wrapper">
          <label className="label">비밀번호 확인</label>
          <input
            className="input"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            {...register("passwordConfirmation", {
              required: " 비밀번호를 확인 해주세요.",
              validate: {
                matchesPreviousPassword: value => {
                  const { password } = getValues();
                  return password === value || "비밀번호가 일치하지 않습니다.";
                },
              },
            })}
          />
          {errors.passwordConfirmation && (
            <p>{errors.passwordConfirmation.message}</p>
          )}
        </div>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          회원가입
        </button>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
