import React from "react";
import './List.css'

const List = ({index, doneCheck, list}) => {

    // console.log("doneCheck" + doneCheck[index])
    return (
        <div className={doneCheck[index] ? "list-item" : ""}>
            {list}
        </div>
    )
}

export default List;