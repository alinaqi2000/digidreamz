import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalAction, ShowModal } from '../../models/UI/ShowModal'
import { AppState } from '../../store'
import { SetShowModal } from '../../store/actions/app'
import Default from '../Layouts/Default'
import Feeds from './Feeds/Feeds'

export default function Home(props: RouteComponentProps) {
    const profile: any = useSelector((state: AppState) => state.firebase.profile);
    const dispatch = useDispatch();

    return (
        <Default>
            <div className="m-5">
                <button className="btn btn-primary" onClick={() => dispatch(
                    {
                        ...new SetShowModal(new ShowModal(true, "action", "My Modal Title", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laudantium, totam quasi corrupti officia, in ea quam, saepe vero iste error autem. Odio omnis, eligendi consequuntur quod fugiat incidunt atque."
                            , [new ModalAction("cancel"), new ModalAction("", "Send", () => console.log("Action is performed"))
                            ]))
                    }
                )} > Show Modal</button>
            </div>
            <Feeds />
        </Default>
    )
}
