import React, { useState } from 'react'
import { navigate, RouteComponentProps } from '@reach/router'
import Auth from '../Layouts/Auth'
import { Form, Button } from 'react-bootstrap';
import firebase from 'firebase';
import Title from '../UI/Title';
import { useForm } from "react-hook-form";
import { useFirebase } from 'react-redux-firebase';
import { SetAlertMessage, SetShowModal } from '../../store/actions/app'
import { useDispatch } from 'react-redux';
import { AlertMessage } from '../../models/UI/AlertMessage';
import { ModalAction, ShowModal } from "../../models/UI/ShowModal";

interface SignUpForm {
    username: string;
    email: string;
    password: string;
}

export default function SignUp(props: RouteComponentProps) {
    const { register, errors, handleSubmit } = useForm<SignUpForm>();
    const fireB = useFirebase();
    const goggleAuth = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider).then((resp) => {
            navigate("/");
        }).catch((error) => error.code !== 'auth/popup-closed-by-user' && dispatch(
            {
                ...new SetShowModal(new ShowModal(true, "alert", "Oops...", error.message
                    , [new ModalAction("cancel", "Ok")
                    ]))
            }
        ));
    }
    const dispatch = useDispatch();
    const submitSignUp = (data: SignUpForm) => {
        fireB.createUser(
            { signIn: false, email: data.email, password: data.password, },
            { displayName: data.username, email: data.email }
        ).then(console.log)
            .catch((error) => dispatch(
                {
                    ...new SetAlertMessage(new AlertMessage("danger", error.message))
                }
            ));
    }
    return (
        <Auth>
            <Title title="Sign Up" />

            <div className="auth-box">
                <h4>Hello!</h4>
                <h5>Sign up to find people who will help to full fill your dreams</h5>
                <Form onSubmit={handleSubmit(submitSignUp)}>
                    <div className="input-text">
                        <input type="text" name="username" ref={register({ required: true, maxLength: 20 })} autoComplete="off" className="input" id="username" placeholder="Jane Doe" />
                        <label htmlFor="text">Full Name</label>
                    </div>
                    {errors.username && <p className="error">Your full name is required</p>}
                    <div className="input-text">
                        <input type="email" name="email" ref={register({ required: true })} autoComplete="off" className="input" id="email" placeholder="jane.appleseed@example.com" />
                        <label htmlFor="email">Email</label>
                    </div>
                    {errors.email && <p className="error">Your email address is required</p>}

                    <div className="input-text">
                        <input type="password" name="password" ref={register({ required: true })} autoComplete="off" className="input" id="password" placeholder="Password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    {errors.password && <p className="error">Your email address is required</p>}

                    <Button className="btn-block mt-4" type="submit">
                        Sign Up
                    </Button>
                    <div className="divider">
                        <span></span>
                        <h5>OR</h5>
                        <span></span>
                    </div>
                    <Button onClick={goggleAuth} className="btn-block" variant="outline-primary" type="button">
                        Sign In with Google
                    </Button>
                    <Button onClick={() => navigate("/login")} className="btn-block" variant="outline-primary" type="button">
                        Sign In with Email
                    </Button>
                </Form>
            </div>
        </Auth>
    )
}
