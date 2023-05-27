import React from "react";
import './List.css'

const List = ({index, doneCheck, list}) => {

    return (
        <div className={doneCheck[index] ? "list list-item" : "list"}>
            <b>{list.toUpperCase()}</b>
        </div>
    )
}

export default List;