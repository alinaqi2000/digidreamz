import React from 'react'
import EmptyImage from '../../../assets/icons/empty.svg';
export default function Feeds() {
    return (
        <div className="feeds">
            <img className="empty-img" src={EmptyImage} alt="No post in your feed" />

        </div>
    )
}
