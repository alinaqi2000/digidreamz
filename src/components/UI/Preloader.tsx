import React from "react";
import preloader from "../../assets/img/preloader.gif";

export default function Preloader(props: { display: boolean }) {
    return (
        <div className={props.display ? "pre-loader" : "pre-loader hidden"}>
            <img src={preloader} alt={process.env.REACT_APP_STE_NAME} />
        </div>
    );
}
