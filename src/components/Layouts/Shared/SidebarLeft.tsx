import React from 'react'
import { AppState } from '../../../store'
import { MoreVertical } from 'react-feather';
import Avatar from '../../UI/Avatar';
import DropDown from '../../UI/DropDown';
import { Link } from '@reach/router';
import { getProfile } from '../../../shared/state';
import { FirebaseReducer } from 'react-redux-firebase';

import { connect } from 'react-redux';
import { MyAppState } from '../../../store/reducers/appReducer';

function SidebarLeft({ app, firebase }: { app: MyAppState, firebase: FirebaseReducer.Reducer }) {
    return (
        <React.Fragment>
            <aside className={app.opneLeftSideBar ? "left open" : "left"}>
                <div className="sidebar-header">
                    <div className="profile">
                        <Avatar url={getProfile(firebase).photoURL} />
                        <h4>{getProfile(firebase).displayName}</h4>
                    </div>
                    <DropDown title={<MoreVertical className="icon" />} >
                        <li><Link to="/manage-profile">Manage Profile</Link></li>
                        <li><Link to="/manage-profile">Change Password</Link></li>
                    </DropDown>

                </div>
            </aside>
        </React.Fragment>

    )
}


export default connect((appState: AppState) => ({ app: appState.app, firebase: appState.firebase }))(SidebarLeft);
