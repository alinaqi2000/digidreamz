import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { ModalAction } from '../../../models/UI/ShowModal';
import { getProfile } from '../../../shared/state';
import { AppState } from '../../../store';
import { SetShowModalActions } from '../../../store/actions/app';
import { ShowModal } from '../../../models/UI/ShowModal';
import { SetShowModal } from '../../../store/actions/app';

interface SelectColorForm {
    avatar: string
}
export default function SelectAvatar() {
    const { register, errors, handleSubmit, setValue, getValues } = useForm<SelectColorForm>();
    const fb = useSelector((state: AppState) => state.firebase);
    const firebase = useFirebase();
    const [gender, setGender] = useState<'male' | 'female'>('male')
    const [cAvatar, setCAvatar] = useState<string>('')

    const maleAvatars = [
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/male-02.svg",
    ];
    const femaleAvatars = [
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-02.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-01.svg",
        process.env.REACT_APP_BASE_URL + "assets/imgs/avatars/female-02.svg",
    ];
    const dispatch = useDispatch();

    const submitSelectAvatar = (data: SelectColorForm) => {
        firebase.updateProfile({ photoURL: data.avatar });
        dispatch({
            ...new SetShowModal(new ShowModal())
        });
    };
    useEffect(() => {
        dispatch({ ...new SetShowModalActions([new ModalAction("action", "Save", handleSubmit(submitSelectAvatar))]) })
    }, []);
    return (
        <React.Fragment>
            <ul className="select-avatars">
                <li className={gender === 'male' ? 'active' : ''} onClick={() => setGender("male")}>Male</li>
                <li className={gender === 'female' ? 'active' : ''} onClick={() => setGender("female")}>Female</li>
            </ul>
            <Form>

                <div className="avatars">
                    {gender === 'male' && maleAvatars.map(((avatar, i) =>
                        <div className="ava" key={i}>
                            <div className={"av " + (cAvatar === avatar ? 'active' : '')} style={{ backgroundImage: `url(${avatar})` }}
                                id={avatar}
                                onClick={(e: any) => {
                                    setValue("avatar", e.target.id || "", {
                                        shouldValidate: true,
                                        shouldDirty: true
                                    })
                                    setCAvatar(e.target.id || "");
                                }}>
                                <div className="layer"></div>
                            </div>
                            <Form.Check
                                ref={register({ required: true })}
                                defaultChecked={getProfile(fb).photoURL == avatar}
                                type={'radio'}
                                id={'m-avatar' + i}
                                name={"avatar"}
                                value={avatar}
                                style={{ display: 'none' }}
                            />
                        </div>
                    ))}
                    {gender === 'female' && femaleAvatars.map(((avatar, i) =>
                        <div className="ava" key={i}>
                            <div className={"av " + (cAvatar === avatar ? 'active' : '')} style={{ backgroundImage: `url(${avatar})` }}
                                id={avatar}
                                onClick={(e: any) => {
                                    setValue("avatar", e.target.id || "", {
                                        shouldValidate: true,
                                        shouldDirty: true
                                    })
                                    setCAvatar(e.target.id || "");
                                }}>
                                <div className="layer"></div>
                            </div>
                            <Form.Check
                                ref={register({ required: true })}
                                defaultChecked={getProfile(fb).photoURL == avatar}
                                type={'radio'}
                                id={'f-avatar' + i}
                                name={"avatar"}
                                value={avatar}
                                style={{ display: 'none' }}
                            />
                        </div>
                    ))}
                </div>
                {errors.avatar?.type == 'required' && <p className="error">Please select an avatar</p>}

            </Form>
        </React.Fragment>
    )
}
