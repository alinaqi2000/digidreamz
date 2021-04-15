import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { SetSetupModal } from '../store/actions/app';
import { getProfile } from '../shared/state';

interface Props {
    children: JSX.Element[];
}

export default function SetUp(props: Props) {
    const firebase = useSelector((state: AppState) => state.firebase);
    const dispatch = useDispatch();
    // const [state, setstate] = useState(false)
    useEffect(() => {
        if (!getProfile(firebase).colorScheme)
            firebase.profile.isLoaded && !firebase.profile.isEmpty && dispatch({ ...new SetSetupModal("color-scheme") });
        else if (!getProfile(firebase).photoURL)
            firebase.profile.isLoaded && !firebase.profile.isEmpty && dispatch({ ...new SetSetupModal("avatar") });
        else if (!getProfile(firebase).themeMode)
            firebase.profile.isLoaded && !firebase.profile.isEmpty && dispatch({ ...new SetSetupModal("theme-mode") });
    }, [firebase.profile]);
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}
