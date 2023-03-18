import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./TuitStats";

const TuitListItem = ({ tuit }) => {

    return (
        <li className="list-group-item">
            <div className="row align-items-start">

                <div className="col-1">
                    <img className="rounded-circle" src={tuit.image} width="40px" height="40px"/>
                </div>

                <div className="col-11">
                    <span><div> <span style={{ fontWeight: 'bold' }} >{tuit.userName} </span><i className="bi bi-check-circle-fill" style={{color:"#2a9fd6"}}></i>
                    <small className="text-muted"> @{tuit.handle}<i className="bi bi-dot"></i>{tuit.time} </small></div></span>
                    <p>{tuit.tuitcontent}</p>

                    <TuitStats tuit={tuit} />
                </div>

            </div>

        </li>
    );
};

export default TuitListItem;