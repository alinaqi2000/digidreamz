import React from 'react'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import DarkFavIcon from '../../assets/img/digi-dark-icon.png';
import LightFavIcon from '../../assets/img/digi-light-icon.png';
import { AppState } from '../../store';
import { MyAppState } from '../../store/reducers/appReducer';
export default function Title(props: { title: string }) {
    const app: MyAppState = useSelector((state: AppState) => state.app);
    return (
        <Helmet>
            <title>{process.env.REACT_APP_SITE_NAME} - {props.title}</title>
            <link rel="icon" href={app.theme == "dark" ? DarkFavIcon : LightFavIcon} />
        </Helmet>
    )
}
