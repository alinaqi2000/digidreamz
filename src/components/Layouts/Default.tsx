import React from 'react'
import AuthRoute from '../../guards/AuthRoute'
import Header from './Shared/Header'
interface Props {
    children: JSX.Element;
}
export default function Default(props: Props) {
    return (
        <AuthRoute>
            <Header />
            <div className="app-content">
                {props.children}
            </div>

        </AuthRoute>
    )
}
