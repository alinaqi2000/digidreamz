import React from "react";
import { useDispatch } from "react-redux";
import { AppState } from "../../../store";
import { Link, navigate } from "@reach/router";
import { getProfile } from "../../../shared/state";
import { FirebaseReducer } from "react-redux-firebase";
import { connect } from "react-redux";
import { MyAppState } from "../../../store/reducers/appReducer";
import * as AppActions from "../../../store/actions/app";
import { Bell, Hash, Home } from "react-feather";
import { ShowModal } from "../../../models/UI/ShowModal";
import SelectColorScheme from "../../Site/Setup/SelectColorScheme";
import SelectAvatar from "../../Site/Setup/SelectAvatar";
import SelectThemeMode from "../../Site/Setup/SelectThemeMode";
import { BiColorFill, BiBrush, BiUser } from "react-icons/bi";
const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "active" : "",
      };
    }}
  />
);
function SidebarLeft({
  app,
  fb,
}: {
  app: MyAppState;
  fb: FirebaseReducer.Reducer;
}) {
  const dispatch = useDispatch();
  const navigateTo = (e: Event, link: string) => {
    e.preventDefault();
    dispatch({ ...new AppActions.SetCurrrentPage(link) });
    // dispatch({ ...new AppActions.ToggleSidebars() })
    // setTimeout(() => {
    navigate(link);
    // }, 250);
  };
  return (
    <React.Fragment>
      <aside className={app.opneLeftSideBar ? "left open" : "left"}>
        <div className="brand">
          {/* <div onClick={() => dispatch({ ...new ToggleLeftSidebar() })} className="profile small">
                        <Avatar url={getProfile(fb).photoURL} />
                    </div> */}
          <h4 className="site-name">{process.env.REACT_APP_SITE_NAME}</h4>
        </div>
        <div className="sidebar-content">
          <ul className="tabs">
            <li>
              <NavLink to="/" onClick={(e: Event) => navigateTo(e, "/")}>
                <Home /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                onClick={(e: Event) => navigateTo(e, "/explore")}
              >
                <Hash /> Explore
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notifications"
                onClick={(e: Event) => navigateTo(e, "/notifications")}
              >
                <Bell /> Notifications
              </NavLink>
            </li>
          </ul>
          <ul className="theme">
            <li
              onClick={() =>
                dispatch({
                  ...new AppActions.SetShowModal(
                    new ShowModal(
                      true,
                      "action",
                      "Select Theme Mode",
                      <SelectThemeMode />,
                      [],
                      true
                    )
                  ),
                })
              }
            >
              <BiBrush />
            </li>
            <li
              onClick={() =>
                dispatch({
                  ...new AppActions.SetShowModal(
                    new ShowModal(
                      true,
                      "action",
                      "Select Color Scheme",
                      <SelectColorScheme />,
                      [],
                      true
                    )
                  ),
                })
              }
            >
              <BiColorFill />
            </li>
            <li
              onClick={() =>
                dispatch({
                  ...new AppActions.SetShowModal(
                    new ShowModal(
                      true,
                      "action",
                      "Select Avatar",
                      <SelectAvatar />,
                      [],
                      true
                    )
                  ),
                })
              }
            >
              <BiUser />
            </li>
          </ul>
          {/* <div className="profile">
                        <Avatar url={getProfile(fb).photoURL} />
                        <h4>{getProfile(fb).displayName}</h4>
                    </div>
                    <DropDown title={<MoreVertical className="icon" />} >
                        <li><Link to="/manage-profile">Manage Profile</Link></li>
                        <li><Link to="/manage-profile">Change Password</Link></li>
                    </DropDown> */}
        </div>
      </aside>
      <ul className="tabs-menu">
        <li>
          <NavLink to="/" onClick={(e: Event) => navigateTo(e, "/")}>
            <Home />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            onClick={(e: Event) => navigateTo(e, "/explore")}
          >
            <Hash />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notifications"
            onClick={(e: Event) => navigateTo(e, "/notifications")}
          >
            <Bell />
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default connect((appState: AppState) => ({
  app: appState.app,
  fb: appState.firebase,
}))(SidebarLeft);
