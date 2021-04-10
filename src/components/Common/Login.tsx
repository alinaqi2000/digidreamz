import React, { useState } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import Auth from "../Layouts/Auth";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase";
import Title from "../UI/Title";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";
import { SetAlertMessage, SetShowModal } from '../../store/actions/app'
import { AlertMessage } from '../../models/UI/AlertMessage';

import { useDispatch } from "react-redux";
import { ModalAction, ShowModal } from "../../models/UI/ShowModal";

interface LoginForm {
    email: string;
    password: string;
}

export default function Login(props: RouteComponentProps) {
    const { register, errors, handleSubmit } = useForm<LoginForm>();
    const fireB = useFirebase();
    const dispatch = useDispatch();
    const goggleAuth = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then((resp) => {
                navigate("/");
            })
            .catch((error) => error.code !== 'auth/popup-closed-by-user' && dispatch(
                {
                    ...new SetShowModal(new ShowModal(true, "alert", "Oops...", error.message
                        , [new ModalAction("cancel", "Ok")
                        ]))
                }
            ));
    };
    const submitLogin = (data: LoginForm) => {
        fireB
            .login({ email: data.email, password: data.password })
            .then(console.log)
            .catch((error) => dispatch(
                {
                    ...new SetAlertMessage(new AlertMessage("danger", error.message))
                }
            ));
    };
    return (
        <Auth>
            <Title title="Sign Up" />

            <div className="auth-box">
                <h4>Hello!</h4>
                <h5>Sign in to find people who will help to full fill your dreams</h5>
                <Form onSubmit={handleSubmit(submitLogin)}>
                    <div className="input-text">
                        <input type="email" name="email" ref={register({ required: true })} autoComplete="off" className="input" id="email" placeholder="jane.appleseed@example.com"
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    {errors.email && (
                        <p className="error">Your email address is required</p>
                    )}

                    <div className="input-text">
                        <input
                            type="password"
                            name="password"
                            ref={register({ required: true })}
                            autoComplete="off"
                            className="input"
                            id="password"
                            placeholder="Password"
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    {errors.password && (
                        <p className="error">Your email address is required</p>
                    )}

                    <Button className="btn-block mt-4" type="submit">
                        Sign In
          </Button>
                    <div className="divider">
                        <span></span>
                        <h5>OR</h5>
                        <span></span>
                    </div>
                    <Button
                        onClick={goggleAuth}
                        className="btn-block"
                        variant="outline-primary"
                        type="button"
                    >
                        Sign In with Google
          </Button>
                </Form>
            </div>
        </Auth>
    );
}
