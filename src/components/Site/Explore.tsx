import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import Default from '../Layouts/Default'


export default function Explore(props: RouteComponentProps) {
    const profile: any = useSelector((state: AppState) => state.firebase.profile);
    return (
        <Default>
            <h3 className="text-center">Explore Here!</h3>
        </Default>
    )
}
