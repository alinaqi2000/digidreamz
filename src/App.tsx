import React, { useEffect } from 'react';
import './App.scss';
import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import * as CounterActions from './store/actions/counter';
import * as AppActions from './store/actions/app';

import { connect, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from './store';
import { MyAppState } from './store/reducers/appReducer';
import { Router } from '@reach/router';
import SignUp from './components/Common/SignUp';
interface Props extends MyAppState {
  subCounter: () => void
  addCounter: () => void
  count: number
}
function App(props: Props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ ...new AppActions.SetTheme() })
  }, [])
  return (
    <div>
      <h3>Ali Naqi Al-Musawi Here!</h3>
      <h4>My site name is {process.env.REACT_APP_SITE_NAME}</h4>
      <button onClick={props.subCounter}>-</button>
      <h5>{props.count}</h5>
      <button onClick={props.addCounter}>+</button>
    </div>
    // <div className={props.theme + " App"}>
    //   <Router>
    //     <SignUp path="/signup" />
    //   </Router>
    // </div>
  );
}
const mapStateToProps = (state: AppState) => {
  return {
    count: state.counter.count,
    theme: state.app.theme
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addCounter: () => dispatch({ ...new CounterActions.AddCounter(5) }),
    subCounter: () => dispatch({ ...new CounterActions.SubCounter(2) })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
