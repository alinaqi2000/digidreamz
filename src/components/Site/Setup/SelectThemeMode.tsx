import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { ModalAction } from '../../../models/UI/ShowModal';
import { getProfile } from '../../../shared/state';
import { toTitleCase } from '../../../shared/utilities';
import { AppState } from '../../../store';
import { SetShowModalActions } from '../../../store/actions/app';
import { ShowModal } from '../../../models/UI/ShowModal';
import { SetShowModal } from '../../../store/actions/app';

interface SelectThemeForm {
    theme: string
}
export default function SelectThemeMode() {
    const { register, errors, handleSubmit, setValue } = useForm<SelectThemeForm>();
    const themeModes: { name: string, color: string }[] = [{ name: 'light', color: '' }, { name: 'dark', color: '' }, { name: 'dim', color: '' }];
    const fb = useSelector((state: AppState) => state.firebase);
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const submitSelectTheme = (data: SelectThemeForm) => {
        firebase.updateProfile({ themeMode: data.theme });
        dispatch({
            ...new SetShowModal(new ShowModal())
        });
    };
    useEffect(() => {
        dispatch({ ...new SetShowModalActions([new ModalAction("action", "Save", handleSubmit(submitSelectTheme))]) })
    }, []);
    return (
        <Form>
            {themeModes.map((theme =>
                <div key={theme.name}>
                    <Form.Check
                        ref={register({ required: true })}
                        defaultChecked={getProfile(fb).themeMode == theme.name}
                        type={'radio'}
                        id={theme.name}
                        name={"theme"}
                        value={theme.name}
                        label={toTitleCase(theme.name)}
                    />
                </div>
            ))}
            {errors.theme?.type == 'required' && <p className="error">Please select a theme mode</p>}

        </Form>
    )
}
