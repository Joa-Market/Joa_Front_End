import React, { useState, useEffect } from "react";
import moment from "moment";
import { apis } from "../../shared/axios";
// css
import "./postdetail.modules.css";
const PostDetail = () => {
  const [post, setPost] = useState({
    id: 0,
    userid: 0,
    title: "",
    contents: "",
    productImg: "noImg",
    productName: "",
    price: 0,
    chatCnt: 0,
    commentCnt: 0,
    likeCnt: 0,
    lookCnt: 0,
    createdAt: 0,
    User: {
      image: "",
      snslogin: "",
      address: "",
    },
  });
  const getPostData = async () => {
    try {
      const data = await apis.getPostDelete(1);
      setPost(data.data.post);
      console.log(post);
    } catch (error) {}
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <div className="postdetail__wrapper">
        <section className="profill">
          <a href="/">
            <div>{post.User.image || "디폴트이미지"}</div>
            <div id="profill-left">
              <div>{post.User.nickName}</div>
              <div>{post.User.address || "디폴트 동위치"}</div>
            </div>
          </a>
        </section>
        <section>
          <h1>{post.title}</h1>
          <p id="category">태그가 들어가야됨, {post.createdAt}</p>
          <div>{post.contents}</div>

          <div>{post.productName}</div>
          <div>{post.productImg}</div>
          <div>{post.User.snslogin || "SNS로그인 상태가아님"}</div>
        </section>

        <section id="bottom">
          <div>
            <div>
              하트?<p id="price">{post.price}</p>
            </div>
          </div>
          <div>
            <button>채팅으로 거래하기</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PostDetail;
