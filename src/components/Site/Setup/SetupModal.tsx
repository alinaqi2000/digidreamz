import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ShowModal } from '../../../models/UI/ShowModal';
import { AppState } from '../../../store';
import { SetShowModal } from '../../../store/actions/app';
import SelectAvatar from './SelectAvatar';
import SelectColorScheme from './SelectColorScheme';
import SelectThemeMode from './SelectThemeMode';

export default function SetupModal() {
    const dispatch = useDispatch();
    const app = useSelector((state: AppState) => state.app);

    useEffect(() => {
        switch (app.setupModal) {
            case 'color-scheme':
                dispatch({
                    ...new SetShowModal(new ShowModal(true, 'action', "Select Color Scheme", <SelectColorScheme />, [], false
                    ))
                });
                break;
            case 'avatar':
                dispatch({
                    ...new SetShowModal(new ShowModal(true, 'action', "Select Avatar", <SelectAvatar />, [], false
                    ))
                });
                break;
            case 'theme-mode':
                dispatch({
                    ...new SetShowModal(new ShowModal(true, 'action', "Select Theme Mode", <SelectThemeMode />, [], false
                    ))
                });
                break;
            default:
                dispatch({
                    ...new SetShowModal(new ShowModal())
                });
                break;
        }

        // return () => {
        //     dispatch({ ...new SetSetupModal("") })
        //     dispatch({ ...new SetShowModal(new ShowModal()) })
        // }
    }, [app.setupModal]);
    return <React.Fragment />

}
