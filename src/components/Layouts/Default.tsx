import React from 'react'
import AuthRoute from '../../guards/AuthRoute'
import Header from './Shared/Header'
import SidebarLeft from './Shared/SidebarLeft'
import SidebarRight from './Shared/SidebarRight'
interface Props {
    children: JSX.Element | JSX.Element[];
}
export default function Default(props: Props) {
    return (
        <AuthRoute>
            <SidebarLeft />
            <div className="app-content">
                <Header />
                {props.children}
            </div>
            <SidebarRight />

        </AuthRoute>
    )
}
