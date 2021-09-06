import React from "react";
import { Link } from "react-router-dom";

const Play = ({setMyChoice}) => {
    return (
        <div className="play">
            <Link to="/game">
                <div className="icon icon--paper"></div>
            </Link>
        </div>
    )
}

export default Play
