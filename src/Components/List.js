import React from "react";
import {MdDone} from "react-icons/md"
import './List.css'

const List = () => {
    return (
        <div className="list-container">
            <MdDone 
                className="done"
            />
            <div>List1</div>
            
        </div>
    )
}

export default List;