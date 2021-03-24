import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { MyAppState } from '../../store/reducers/appReducer';
import { SwitchTheme } from '../../store/actions/app';
import '../../styles/auth/auth.scss';

export default function Auth(props: { children: JSX.Element }) {
    const app: MyAppState = useSelector((state: AppState) => state.app)
    const dispatch = useDispatch();
    const changeTheme = () => {
        dispatch({ ...new SwitchTheme() })
    }
    return (
        <React.Fragment>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand>
                    <h4 className="site-name">{process.env.REACT_APP_SITE_NAME}</h4>
                </Navbar.Brand>
                <div>
                    <div className="theme__switcher">
                        <div className="checkbox">
                            <input type="checkbox" onChange={changeTheme} id="theme_switcher" checked={app.theme === "light"} />
                            <label htmlFor="theme_switcher"></label>
                        </div>
                    </div>
                </div>
            </Navbar>
            <Container className="mt-5">
                <Row className="justify-content-center">

                    <Col md={4}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

    )
}
