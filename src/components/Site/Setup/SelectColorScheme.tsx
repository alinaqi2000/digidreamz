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

interface SelectColorForm {
    color: string
}
export default function SelectColorScheme() {
    const { register, errors, handleSubmit, setValue } = useForm<SelectColorForm>();
    const colorSchemes: { name: string, color: string }[] = [{ name: 'sienna', color: '' }, { name: 'red', color: '' }, { name: 'blue', color: '' }, { name: 'green', color: '' }, { name: 'orange', color: '' }];
    const fb = useSelector((state: AppState) => state.firebase);
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const submitSelectColor = (data: SelectColorForm) => {
        firebase.updateProfile({ colorScheme: data.color });
        dispatch({
            ...new SetShowModal(new ShowModal())
        });
    };
    useEffect(() => {
        dispatch({ ...new SetShowModalActions([new ModalAction("action", "Save", handleSubmit(submitSelectColor))]) })
    }, []);
    return (
        <Form>
            {colorSchemes.map((scheme =>
                <div key={scheme.name}>
                    <Form.Check
                        ref={register({ required: true })}
                        defaultChecked={getProfile(fb).colorScheme == scheme.name}
                        type={'radio'}
                        id={scheme.name}
                        name={"color"}
                        value={scheme.name}
                        label={toTitleCase(scheme.name)}
                    />
                </div>
            ))}
            {errors.color?.type == 'required' && <p className="error">Please select a color</p>}

        </Form>
    )
}
