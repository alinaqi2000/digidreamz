import React from 'react'
import Swal, { SweetAlertIcon } from 'sweetalert2';
export function AlertMessage(props: { type: string, title: string, icon: SweetAlertIcon, text: string }) {
    if (props.type === "msg")
        return Swal.fire({
            icon: props.icon,
            title: props.title,
            text: props.text
        })

}
