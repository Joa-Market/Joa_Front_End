import React, { useState } from "react";
// redux
// import { useSelector } from "react-redux";
// route
import { history } from "../../redux/configureStore";
// css
import "./navbar.modules.css";
// font-awesome
import "../../shared/fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(1);

  // const user = useSelector(state => state.user);
  // console.log(user);

  // const moveToHome = () => {};
  return (
    <>
      <nav className="wrapper">
        <div onClick={() => history.push("/")}>
          <div onClick={() => setActiveNav(1)}>
            <FontAwesomeIcon
              icon="fa-house"
              size="lg"
              className={activeNav === 1 ? "nav-item active" : "nav-item"}
            />
          </div>
        </div>
        <div onClick={() => history.push("/")}>
          <div onClick={() => setActiveNav(2)}>
            <FontAwesomeIcon
              icon="fa-book"
              size="lg"
              className={activeNav === 2 ? "nav-item active" : "nav-item"}
            />
          </div>
        </div>
        <div onClick={() => history.push("/")}>
          <div onClick={() => setActiveNav(3)}>
            <FontAwesomeIcon
              icon="fa-location-dot"
              size="lg"
              className={activeNav === 3 ? "nav-item active" : "nav-item"}
            />
          </div>
        </div>
        <div onClick={() => history.push("/chat")}>
          <div onClick={() => setActiveNav(4)}>
            <FontAwesomeIcon
              icon="fa-comment-dots"
              size="lg"
              className={activeNav === 4 ? "nav-item active" : "nav-item"}
            />
          </div>
        </div>
        <div onClick={() => history.push("/profile/1")}>
          <div onClick={() => setActiveNav(5)}>
            <FontAwesomeIcon
              icon="user"
              size="lg"
              className={activeNav === 5 ? "nav-item active" : "nav-item"}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
