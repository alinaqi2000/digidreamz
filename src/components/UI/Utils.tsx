import React, {  } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDispatch } from 'react-redux'
import { AlertMessage } from '../../models/UI/AlertMessage'
import { ModalAction, ShowModal } from '../../models/UI/ShowModal'
import { SetAlertMessage, SetShowModal } from '../../store/actions/app'

export default function Utils(props: RouteComponentProps) {
    const dispatch = useDispatch();

    return (
        <div className="m-5">
            <button className="btn btn-primary" onClick={() => dispatch(
                {
                    ...new SetShowModal(new ShowModal(true, "action", "My Modal Title", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laudantium, totam quasi corrupti officia, in ea quam, saepe vero iste error autem. Odio omnis, eligendi consequuntur quod fugiat incidunt atque."
                        , [new ModalAction("cancel"), new ModalAction("", "Send", () => console.log("Action is performed"))
                        ]))
                }
            )} > Show Modal</button>
            <button className="btn btn-primary" onClick={() => dispatch(
                {
                    ...new SetAlertMessage(new AlertMessage("warning", "Message info is here " + (Math.random() * 100)))
                }
            )} > Show Alert Message</button>
        </div>
    )
}
