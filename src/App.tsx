import React, { useEffect } from "react";
import "./App.scss";
import * as AppActions from "./store/actions/app";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store";
import { MyAppState } from "./store/reducers/appReducer";
import { Router } from "@reach/router";
import SignUp from "./components/Common/SignUp";
import Preloader from "./components/UI/Preloader";
function App() {
  const dispatch = useDispatch();
  const state: MyAppState = useSelector((state: AppState) => state.app);
  useEffect(() => {
    dispatch({ ...new AppActions.SetTheme() });
    // setTimeout(() => {
    dispatch({ ...new AppActions.TogglePreloader() });
    // }, 2000);
  }, []);
  return (
    <div className={state.theme + " App"}>
      <Preloader display={state.preloader} />
      <Router>
        <SignUp path="/signup" />
      </Router>
    </div>
  );
}

export default App;
