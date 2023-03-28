import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./TuitStats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
            <li className="list-group-item">
                <div className="row">

                    <div className="col-auto">
                        <img className="float-end rounded-circle" src={`../../../images/${tuit.image}`}
                             width="50px" height="50px" alt=""/>
                    </div>

                    <div className="col-10">
                        <i onClick={() => deleteTuitHandler(tuit._id)}  className="bi bi-x-lg float-end"></i>
                    <span><div> <span style={{ fontWeight: 'bold' }} >{tuit.username} </span><i className="bi bi-check-circle-fill" style={{color:"#2a9fd6"}}></i>
                    <small className="text-muted"> {tuit.handle}<i className="bi bi-dot"></i>{tuit.time} </small></div></span>
                        <p>{tuit.tuit}</p>

                        <TuitStats tuit={tuit} />
                    </div>

                </div>
            </li>
    );
};

export default TuitListItem;