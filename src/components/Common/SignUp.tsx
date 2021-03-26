import { RouteComponentProps } from '@reach/router'
import React from 'react'
import Auth from '../Layouts/Auth'
import { Form, Button } from 'react-bootstrap';

export default function SignUp(props: RouteComponentProps) {
    return (
        <Auth>

            <div className="auth-box">
                <h4>Hello!</h4>
                <h5>Sign up to find people who will help to full fill your dreams</h5>
                <Form>
                    {/* <Form.Group controlId="formBasicEmail"> */}
                    <div className="input-text">
                        <input type="email" autoComplete="off" className="input" id="email" placeholder="jane.appleseed@example.com" />
                        <label htmlFor="email">Email</label>
                    </div>
                    {/* </Form.Group> */}
                    <div className="input-text">
                        <input type="password" autoComplete="off" className="input" id="email" placeholder="Password" />
                        <label htmlFor="email">Password</label>
                    </div>
                    <Button className="btn-block" type="button">
                        Sign Up
                    </Button>
                    <span>OR</span>
                    <Button className="btn-block" type="button">
                        Sign In with Google
                    </Button>
                </Form>
            </div>

        </Auth>
    )
}
