import React from "react";
import "./addimg.modules.css";
const AddImg = () => {
  const insertImg = e => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      console.log(previewImgUrl);
    };
  };
  return (
    <>
      <div className="addimg__wrapper">
        <form encType="multipart/form-data">
          <label htmlFor="file">이미지업로드</label>
          <input
            type="file"
            id="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={e => insertImg(e)}
          />
        </form>
      </div>
    </>
  );
};

export default AddImg;
