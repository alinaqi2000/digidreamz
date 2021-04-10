import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';

import { FirebaseReducer } from 'react-redux-firebase';
import { getProfile } from '../../shared/state';
import Avatar from './Avatar';
import { Link } from '@reach/router';
import { ToggleLeftSidebar } from '../../store/actions/app';
import { LogOut } from 'react-feather';
import firebase from 'firebase';
export default function ProfileDropDown() {
    const fb: FirebaseReducer.Reducer = useSelector((state: AppState) => state.firebase);
    const dispatch = useDispatch();

    return (
        <div className="profile-dropdown">
            <button className="toggler-sm" onClick={() => dispatch({ ...new ToggleLeftSidebar() })}>
                <Avatar url={getProfile(fb).photoURL} />
            </button>
            <button className="toggler">
                <Avatar url={getProfile(fb).photoURL} />
            </button>
            <div className="menu col-md-4 col-sm-5 col-8">
                <div className="menu-header">
                    <Avatar class="menu-avatar" url={getProfile(fb).photoURL} />
                    <h4>{getProfile(fb).displayName}</h4>
                </div>
                <ul>
                    <li><Link to="/manage-profile">Manage Profile</Link></li>
                    <li><Link to="/manage-profile">Change Password</Link></li>
                    <li><a onClick={() => firebase.auth().signOut()}><LogOut /></a></li>
                </ul>
            </div>
        </div>
    )
}
