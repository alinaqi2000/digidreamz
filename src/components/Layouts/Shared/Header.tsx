import React from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { MyAppState } from '../../../store/reducers/appReducer';
import { SwitchTheme } from '../../../store/actions/app';
import firebase from 'firebase';

export default function Header() {
    const app: MyAppState = useSelector((state: AppState) => state.app)
    const dispatch = useDispatch();
    const logout = () => {
        firebase.auth().signOut();
    }
    return (
        <header>
            <Container>
                <div className="col-md-12 mt-1">
                    <div className="row justify-content-between py-3">
                        <h4 className="site-name">{process.env.REACT_APP_SITE_NAME}</h4>
                        <div>
                            <h5 onClick={logout}>Logout</h5>
                            <div className="theme__switcher">
                                <div className="checkbox">
                                    <input type="checkbox" onChange={() => dispatch({ ...new SwitchTheme() })} id="theme_switcher" checked={app.theme === "light"} />
                                    <label htmlFor="theme_switcher"></label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>

        </header>
    )
}
