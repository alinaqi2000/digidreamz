import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import Default from '../Layouts/Default'
import Title from '../UI/Title'
import Feeds from './Feeds/Feeds'

export default function Home(props: RouteComponentProps) {
    const profile: any = useSelector((state: AppState) => state.firebase.profile);
    return (
        <Default>
            <Title title="Home" />
            <Feeds />
        </Default>
    )
}
