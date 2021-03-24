import { RouteComponentProps } from '@reach/router'
import React from 'react'
import Auth from '../Layouts/Auth'
import { Form, Button } from 'react-bootstrap';

export default function SignUp(props: RouteComponentProps) {
    return (
        <Auth>
            <div className="auth-box">
                <h4 className="text-center">Sign Up</h4>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="btn-block" type="submit">
                        Submit
                </Button>
                </Form>
            </div>

        </Auth>
    )
}
