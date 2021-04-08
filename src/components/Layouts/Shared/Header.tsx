import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { MyAppState } from '../../../store/reducers/appReducer';
import { Link } from '@reach/router';
import { FirebaseReducer } from 'react-redux-firebase';
import ProfileDropDown from '../../UI/ProfileDropDown';
import { AlignJustify } from 'react-feather';
import { ToggleLeftSidebar } from '../../../store/actions/app';
const NavLink = (props: any) => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            return {
                className: isCurrent ? "active" : ""
            }
        }}
    />
);
export default function Header() {
    const app: MyAppState = useSelector((state: AppState) => state.app);
    const fb: FirebaseReducer.Reducer = useSelector((state: AppState) => state.firebase);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div className="content-header">
                <div className="title">
                    {/* <div className="bars" onClick={() => dispatch({ ...new ToggleLeftSidebar() })}>
                        <AlignJustify />
                    </div> */}
                    <h3>
                        {app.cPage.name}
                    </h3>
                </div>
                {/* <div className="profile">
                  
                    <h4>{getProfile(fb).displayName}</h4>
                </div> */}
                <ProfileDropDown />

            </div>
            {/* <div className="brand">
                <div onClick={() => dispatch({ ...new ToggleLeftSidebar() })} className="profile small">
                    <Avatar url={getProfile(fb).photoURL} />
                </div>
                <h4 className="site-name">{process.env.REACT_APP_SITE_NAME}</h4>
            </div>

            <div className="navbar-right">
                <nav>
                    <div className="nav-items">
                        <NavLink to="/">Home</NavLink>
                    </div>
                </nav>
                <div className="theme__switcher">
                    <div className="checkbox" title="Switch Theme" >
                        <input type="checkbox" onChange={() => dispatch({ ...new SwitchTheme() })} id="theme_switcher" checked={app.theme === "light"} />
                        <label htmlFor="theme_switcher"></label>
                    </div>

                </div>
                <button title="Logout" onClick={() => firebase.auth().signOut()} className="responsive-bars">
                    <LogOut />
                </button>
                <button onClick={() => dispatch({ ...new ToggleRightSidebar() })} className="responsive-bars right">
                    <Menu />
                </button>
            </div> */}


        </React.Fragment>
    )
}
