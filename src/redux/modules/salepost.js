import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

// action type

// action creator
// const signUp = createAction(SIGN_UP);

const initialState = {
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
};

const getSalePost = async () => {
  apis
    .getPost()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

const postSalePost = async data => {
  apis
    .addPost(data)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

export default handleActions({}, initialState);

export { getSalePost, postSalePost };
