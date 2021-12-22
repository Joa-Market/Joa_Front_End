import React, { useState } from "react";
// components
import AddImg from "../../components/AddImg";
import { history } from "../../redux/configureStore";
import { apis } from "../../shared/axios";
// css
import "./addpost.modules.css";

const AddPost = () => {
  const [post, setPost] = useState({
    productImg: "",
    price: 0,
  });

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    setPost({
      ...post,
      [name]: value,
    });
    console.log(post);
  };
  const salePosting = () => {
    if (post.title && post.productName) {
      apis
        .addPost(post)
        .then(data => {
          const {
            data: { result },
          } = data;
          if (result === "success") {
            history.push("/?status=정상입력완료");
          } else {
            console.log("에러확인해주세요");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("현재 로그인 상태가 아님..!");
      history.push("/login?status=로그인이필요합니다.");
    }
  };

  return (
    <>
      <div className="addpost__wrapper">
        <AddImg />
      </div>
      <input placeholder="여기에는 제목" name="title" onChange={onChange} />
      <input
        placeholder="여기에는 상품설명"
        name="contents"
        onChange={onChange}
      />
      <input placeholder="여기에는 상품가격" name="price" onChange={onChange} />
      <input
        placeholder="여기에는 상품이름"
        name="productName"
        onChange={onChange}
      />
      <button onClick={salePosting}> 클릭시 올림</button>
    </>
  );
};

export default AddPost;
