import React from "react";
// component
import Post from "../../components/Post";
// css
import "./home.modules.css";
// react-icon
import { MdAddCircle } from "react-icons/md";
// route
import { history } from "../../redux/configureStore";
const Home = props => {
  return (
    <React.Fragment>
      <div style={{ marginBottom: "75px" }}>
        <Post />
      </div>
      <div
        className="home__add__post"
        onClick={() => {
          history.push("/addpost");
        }}
      >
        <MdAddCircle />
      </div>
    </React.Fragment>
  );
};

export default Home;
