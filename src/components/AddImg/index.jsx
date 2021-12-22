import React, { useState } from "react";
// css
import "./addimg.modules.css";
// react-icons
import { AiOutlineCamera } from "react-icons/ai";

const AddImg = () => {
  const [img, setImg] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  const insertImg = e => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);

      setImg([...img, e.target.files[0]]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setPreviewImg([...previewImg, previewImgUrl]);
      }
    };
  };

  const deleteImg = index => {
    const imgArr = img.filter((el, idx) => idx !== index);
    const imgNameArr = previewImg.filter((el, idx) => idx !== index);

    setImg([...imgArr]);
    setPreviewImg([...imgNameArr]);
  };

  const getPreviewImg = () => {
    if (img === null || img.length === 0) {
      return (
        <div className="addimg__container">
          <div className="imgArea">
            <img
              className="addImg__prev"
              src="https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
              alt="이미지없음"
            />
          </div>
        </div>
      );
    } else {
      return img.map((el, index) => {
        return (
          <div className="addimg__container" key={index}>
            <div className="imgArea">
              <img className="addImg__prev" src={previewImg} alt="img" />
            </div>
            <button onClick={() => deleteImg(index)}>❌</button>
          </div>
        );
      });
    }
  };

  return (
    <>
      <div className="addimg__wrapper">
        {getPreviewImg()}
        <form encType="multipart/form-data">
          <label className="addImg__uploadLabel" htmlFor="file">
            <AiOutlineCamera />
          </label>
          <input
            className="addImg_uploadBtn"
            type="file"
            id="file"
            onChange={e => insertImg(e)}
          />
        </form>
      </div>
    </>
  );
};

export default AddImg;
