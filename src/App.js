import React from "react";
// redux

// route
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "./redux/configureStore";
// pages
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import LoginStart from "./pages/LoginStart";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
// components
import Navbar from "./components/Navbar";
// import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/loginstart" component={LoginStart}></Route>
          <Route exact path="/profile/:id" component={Profile}></Route>
          <Route exact path="/chat" component={Chat}></Route>
        </Switch>
        <Navbar />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
