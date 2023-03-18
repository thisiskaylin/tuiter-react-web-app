import React from "react";
import { useSelector } from "react-redux";
import TuitListItem from "./tuit-list-item";

const TuitList = () => {

    const allTuits = (state) => state.tuits.tuits;
    const tuits = useSelector(allTuits);

    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitListItem
                        key={tuit.id}
                        tuit={tuit}/>
                )
            }
        </ul>
    )
};

export default TuitList;