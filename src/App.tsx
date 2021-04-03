import React, { useEffect } from "react";
import "./App.scss";
import * as AppActions from "./store/actions/app";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store";
import { MyAppState } from "./store/reducers/appReducer";
import { Router } from "@reach/router";
import SignUp from "./components/Common/SignUp";
import Preloader from "./components/UI/Preloader";
import Home from "./components/Site/Home";
import Login from "./components/Common/Login";
import FirebaseTest from "./components/FirebaseTest";

function App() {
  const dispatch = useDispatch();
  const state: MyAppState = useSelector((state: AppState) => state.app);
  useEffect(() => {
    dispatch({ ...new AppActions.SetTheme() });
  }, []);
  return (<div className={state.theme + " App"}>
    <div onClick={() => dispatch({ ...new AppActions.ToggleSidebars() })} className="overlay left" style={{ display: state.opneLeftSideBar ? "block" : "none" }}></div>
    <div onClick={() => dispatch({ ...new AppActions.ToggleSidebars() })} className="overlay right" style={{ display: state.opneRightSideBar ? "block" : "none" }}></div>

    {/* <Preloader display={state.preloader} /> */}
    <Router>
      <Home path="/" />
      <FirebaseTest path="/test" />
      <SignUp path="/signup" />
      <Login path="/login" />
    </Router>
  </div>

  );
}

export default App;
