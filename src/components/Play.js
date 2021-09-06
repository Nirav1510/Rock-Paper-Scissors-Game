import React from "react";
import { Link } from "react-router-dom";

const Play = ({setMyChoice}) => {
    return (
        <div className="play">
            <Link to="/game">
                <div data-id="paper" className="icon icon--paper">
                    Paper
                </div>
            </Link>
        </div>
    )
}

export default Play
