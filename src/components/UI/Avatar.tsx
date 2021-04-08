import React from 'react'
import MaleAvatar from '../../assets/img/male-avatar.svg';

export default function Avatar(props: { url: string, class?: string }) {
    return (
        <div className={props.class || "avatar"} style={{
            backgroundImage: `url('${props.url || MaleAvatar}')`
        }}>
        </div>
    )
}
