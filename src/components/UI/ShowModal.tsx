import React from "react";
import { X, AlertCircle } from "react-feather";
import { useDispatch } from "react-redux";
import { ModalAction, ShowModal as Modal } from "../../models/UI/ShowModal";
import { SetShowModal, SetShowModalActions } from "../../store/actions/app";

export default function ShowModal(modal: Modal) {
  const dispatch = useDispatch();
  function close() {
    dispatch({ ...new SetShowModal(new Modal()) });
    dispatch({ ...new SetShowModalActions([]) });
  }
  switch (modal.type) {
    case "action":
      return (
        <div className={`mymodal ${modal.visible ? "show" : "hide"}`}>
          <div
            onClick={close}
            className="overlay"
            style={{ display: modal.visible ? "block" : "none" }}
          ></div>
          <div className={`box ${modal.visible ? "" : "hide"}`}>
            <div className="header">
              <h4>{modal.title}</h4>
              {modal.hasCancel && (
                <span onClick={close}>
                  <X />
                </span>
              )}
            </div>
            <div className="content">{modal.content}</div>
            {modal.actions.length && (
              <div className="footer">
                {modal.actions.map((action: ModalAction) => (
                  <ActionButton key={action.name} {...{ action, modal }} />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    default:
      return (
        <div className={`mymodal ${modal.visible ? "show" : "hide"}`}>
          <div
            className="overlay"
            style={{ display: modal.visible ? "block" : "none" }}
          ></div>
          <div className={`box ${modal.visible ? "" : "hide"}`}>
            <div className="header">
              <div className="d-flex align-items-center justify-content-start">
                <span>
                  <AlertCircle />
                </span>
                <h4 className="ml-1">{modal.title}</h4>
              </div>
              {modal.hasCancel && (
                <span
                  onClick={() =>
                    dispatch({
                      ...new SetShowModal({ ...modal, visible: false }),
                    })
                  }
                >
                  <X />
                </span>
              )}
            </div>
            <div className="content">{modal.content}</div>
            {modal.actions.length && (
              <div className="footer">
                {modal.actions.map((action: ModalAction) => (
                  <ActionButton key={action.name} {...{ action, modal }} />
                ))}
              </div>
            )}
          </div>
        </div>
      );
  }
}
const ActionButton = (props: { action: ModalAction; modal: Modal }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {props.action.type == "cancel" ? (
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() =>
            dispatch({
              ...new SetShowModal({ ...props.modal, visible: false }),
            })
          }
        >
          {props.action.name || "Cancel"}
        </button>
      ) : (
        <button
          className="btn btn-sm btn-primary"
          onClick={props.action.action}
        >
          {props.action.name}
        </button>
      )}
    </React.Fragment>
  );
};
