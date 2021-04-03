import React from 'react'
import MaleAvatar from '../../assets/img/male-avatar.svg';

export default function Avatar(props: { url: string }) {
    return (
        <div className="avatar" style={{
            backgroundImage: `url('${props.url || MaleAvatar}')`
        }}>
        </div>
    )
}
