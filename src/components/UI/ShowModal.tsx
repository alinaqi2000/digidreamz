import React from 'react'
import { X } from 'react-feather'
import { useDispatch } from 'react-redux'
import { ModalAction, ShowModal as Modal } from '../../models/UI/ShowModal'
import { SetShowModal } from '../../store/actions/app'

export default function ShowModal(modal: Modal) {
    const dispatch = useDispatch();
    return (
        <div className={`mymodal ${modal.visible ? "show" : "hide"}`}>
            <div className="overlay" style={{ display: modal.visible ? "block" : "none" }}></div>
            <div className={`box ${modal.visible ? "" : "hide"}`}>
                <div className="header">
                    <h4>{modal.title}</h4>
                    <span onClick={() => dispatch({ ...new SetShowModal({ ...modal, visible: false }) })}><X /></span>
                </div>
                <div className="content">
                    {modal.content}
                </div>
                <div className="footer">
                    {modal.actions.length && modal.actions.map((action: ModalAction) => <ActionButton {...{ action, modal }} />)}
                </div>
            </div>
        </div >
    )
}
const ActionButton = (props: { action: ModalAction, modal: Modal }) => {
    const dispatch = useDispatch();
    return <React.Fragment>
        {
            props.action.type == "cancel" ? (
                <button className='btn btn-sm btn-outline-primary' onClick={() => dispatch({ ...new SetShowModal({ ...props.modal, visible: false }) })}>{props.action.name || "Cancel"}</button>

            ) : (
                <button className='btn btn-sm btn-primary' onClick={props.action.action}>{props.action.name}</button>
            )
        }

    </React.Fragment>
}