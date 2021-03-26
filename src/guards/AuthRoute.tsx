import React, { Component, useEffect } from 'react'
import { navigate, Redirect } from '@reach/router';
import { connect, useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { FirebaseReducer } from 'react-redux-firebase';
import { TogglePreloader } from '../store/actions/app';
import { Dispatch } from 'redux';
import { log } from 'node:console';

interface Props {
    children: JSX.Element[];
}

export default function AuthRoute(props: Props) {
    const firebase = useSelector((state: AppState) => state.firebase);
    const dispatch = useDispatch();

    useEffect(() => {
        if (firebase.auth.isLoaded)
            dispatch({ ...new TogglePreloader(false) });
        if (firebase.auth.isLoaded && firebase.auth.isEmpty)
            navigate("/signup");
    }, [firebase.auth]);
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

// class AuthRoute extends Component<Props, {}> {
//     constructor(props: Props) {
//         super(props)
//         if (this.props.firebase.auth.isLoaded)
//             this.props.togglePreloader();

//         if (!this.props.firebase.auth.isEmpty)
//             setTimeout(() => navigate("/signup"));
//     }
//     componentDidMount() {

//     }
//     render() {
//         const { children } = this.props
//         return (
//             <React.Fragment>
//                 {children}
//             </React.Fragment>
//         )
//     }
// }
// const mapStateToProps = (state: AppState) => ({
//     firebase: state.firebase
// });
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         togglePreloader: () => dispatch({ ...new TogglePreloader(false) })
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);