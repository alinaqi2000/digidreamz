import React, { useEffect } from 'react'
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { MyAppState } from '../../store/reducers/appReducer';
import { SwitchTheme, TogglePreloader } from '../../store/actions/app';
import IdeaImg from '../../assets/img/ideas.svg';
import DiscussImg from '../../assets/img/discuss.svg';
import PrivacyImg from '../../assets/img/privacy.svg';

import { navigate } from '@reach/router';

interface Props {
    children: JSX.Element[]
}

export default function Auth(props: Props) {
    const app: MyAppState = useSelector((state: AppState) => state.app);
    const firebase = useSelector((state: AppState) => state.firebase);
    const dispatch = useDispatch();

    useEffect(() => {
        if (firebase.auth.isLoaded)
            dispatch({ ...new TogglePreloader(false) });
        if (firebase.auth.isLoaded && !firebase.auth.isEmpty)
            navigate("/");
    }, [firebase.auth]);
    return (
        <React.Fragment>
            <header>
                <Container>
                    <div className="col-md-12 mt-1">
                        <div className="row justify-content-between py-3">
                            <h4 className="site-name">{process.env.REACT_APP_SITE_NAME}</h4>

                            <div className="theme__switcher">
                                <div className="checkbox">
                                    <input type="checkbox" onChange={() => dispatch({ ...new SwitchTheme() })} id="theme_switcher" checked={app.theme === "light"} />
                                    <label htmlFor="theme_switcher"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </header>

            <Container className="page-content">
                <Row className="justify-content-center auth-content">
                    <Col xl={8}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={IdeaImg}
                                    alt="Dreams"
                                />
                                <Carousel.Caption>
                                    <h3>Fulfil your dreams</h3>
                                    <p>We will help you find the right match.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={DiscussImg}
                                    alt="Discuss"
                                />

                                <Carousel.Caption>
                                    <h3>Discuss your problems</h3>
                                    <p>Discuss you dreams with other people, So they know about you.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={PrivacyImg}
                                    alt="Privacy Protection"
                                />

                                <Carousel.Caption>
                                    <h3>Privacy Protection</h3>
                                    <p>Your Privacy will be protected</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        {/* <img src={SignUpImg} className="auth-image" alt="SIgnIn" /> */}
                    </Col>
                    <Col xl={4} className="p-0">
                        <div className="auth-side">

                            {props.children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}