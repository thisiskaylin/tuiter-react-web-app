import React from "react";
import { useDispatch } from "react-redux";


const TuitStats = ({ tuit }) => {

    return (
        <div className="row mt-2">

            <div className="col">
                <i className="bi bi-chat-square me-2"></i>
                {tuit.stats.replies}
            </div>

            <div className="col">
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.stats.retuits}
            </div>

            <div className="col">
                {tuit.liked &&
                    <i className="bi bi-heart me-2" style={{ color: tuit.liked ? 'red' : "white" }}></i>
                }
                {!tuit.liked &&
                    <i className="bi bi-heart me-2"></i>
                }
                {tuit.stats.likes}
            </div>

            <div className="col">
                <i className="bi bi-box-arrow-up-right me-2"></i>
            </div>

        </div>
    )
}

export default TuitStats;
