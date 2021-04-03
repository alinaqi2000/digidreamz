import React from 'react'

interface Props {
    title: JSX.Element;
    children: JSX.Element | JSX.Element[]
}
export default function DropDown(props: Props) {
    return (
        <div className="drop-down-menu">
            <button className="toggler">
                {props.title}
            </button>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}
