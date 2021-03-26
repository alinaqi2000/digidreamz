import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import Default from '../Layouts/Default'

export default function Home(props: RouteComponentProps) {
    const firebase = useSelector((state: AppState) => state.firebase);
    return (
        <Default>
            <h4 className="text-center mt-5">Welcome {firebase.auth.displayName || firebase.auth.email} to this website !</h4>
        </Default>
    )
}
