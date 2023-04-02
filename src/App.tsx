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
import Explore from "./components/Site/Explore";
import Login from "./components/Common/Login";
import FirebaseTest from "./components/FirebaseTest";
import Title from "./components/UI/Title";
import Notifications from "./components/Site/Notifications";
import ShowModal from "./components/UI/ShowModal";
import AlertMessage from "./components/UI/AlertMessage";
import Utils from "./components/UI/Utils";
import SetupModal from "./components/Site/Setup/SetupModal";
import { getProfile } from "./shared/state";

function App() {
  const dispatch = useDispatch();
  const app: MyAppState = useSelector((state: AppState) => state.app);
  const firebase = useSelector((state: AppState) => state.firebase);

  useEffect(() => {
    dispatch({ ...new AppActions.SetTheme() });
    dispatch({ ...new AppActions.SetCurrrentPage(window.location.pathname) });
  }, [dispatch]);
  return (
    <div
      className={
        (getProfile(firebase).themeMode || "dim") +
        " App " +
        (getProfile(firebase).colorScheme || "sienna")
      }
    >
      <div
        onClick={() => dispatch({ ...new AppActions.ToggleSidebars() })}
        className="overlay left"
        style={{
          display:
            app.opneLeftSideBar || app.opneRightSideBar ? "block" : "none",
        }}
      ></div>
      <ShowModal {...app.showModal} />
      <AlertMessage alertMessages={app.alertMessages} />
      <SetupModal />
      {/* <Preloader display={app.preloader} /> */}
      <Title title={app.cPage.seo_title} />
      <Router>
        {/* Protected */}
        <Home path="/" />
        <Notifications path="/notifications" />
        <Explore path="/explore" />
        {/* Authentication */}
        <SignUp path="/signup" />
        <Login path="/login" />
        {/* Testing */}
        <FirebaseTest path="/test" />
        <Utils path="/utils" />
      </Router>
    </div>
  );
}

export default App;
