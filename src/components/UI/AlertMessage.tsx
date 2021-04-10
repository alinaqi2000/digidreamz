import React, { useEffect, useState } from 'react'
import { AlertTriangle, CheckCircle, Info, XCircle } from 'react-feather'
import { AlertMessage as AM } from '../../models/UI/AlertMessage'
import { Animated } from "react-animated-css";
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { ReduceAlertMessage } from '../../store/actions/app';

export default function AlertMessage(props: { alertMessages: AM[] }) {

    return (<React.Fragment>
        <Helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Helmet>
        {
            <div className="alert-messages">
                {props.alertMessages.map((message) => {
                    switch (message.type) {
                        case 'success':
                            return <Message key={message.key} message={message} logo={<CheckCircle />} />
                        case 'danger':
                            return <Message key={message.key} message={message} logo={<XCircle />} />
                        case 'warning':
                            return <Message key={message.key} message={message} logo={<AlertTriangle />} />
                        default:
                            return <Message key={message.key} message={message} logo={<Info />} />
                    }
                })}
            </div>

        }
    </React.Fragment>)
}
const Message = (props: { message: AM, logo: any }) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<boolean>(true)

    useEffect(() => {
        var time = setTimeout(() => { }, 0);
        var setTime = setTimeout(() => {
            setState(false)
        }, 5000);
        if (state == false)
            time = setTimeout(() => {
                dispatch({ ...new ReduceAlertMessage(props.message.key) });
            }, 1000);
        return () => {
            clearTimeout(setTime);
            clearTimeout(time);
        }
    }, [state])
    return (
        <Animated animationInDuration={500} animationOutDuration={250} animationIn="slideInDown" animationOut="zoomOut" isVisible={state}>
            <div className={`msg ${props.message.type}`}>
                <div className="logo">{props.logo}</div>
                <div className="body">{props.message.body}</div>
            </div>
        </Animated>
    )
}