import React from 'react'
import { AppState } from '../../../store'
import { MoreVertical } from 'react-feather';
import Avatar from '../../UI/Avatar';
import DropDown from '../../UI/DropDown';
import { Link } from '@reach/router';
import { getProfile } from '../../../shared/state';
import { FirebaseReducer } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { MyAppState } from '../../../store/reducers/appReducer';

function SidebarRight({ app, firebase }: { app: MyAppState, firebase: FirebaseReducer.Reducer }) {
    return (
        <aside className={app.opneRightSideBar ? "right open" : "right"}>
            <h5 className="text-center">Some content</h5>
        </aside>
    )
}


export default connect((appState: AppState) => ({ app: appState.app, firebase: appState.firebase }))(SidebarRight);
