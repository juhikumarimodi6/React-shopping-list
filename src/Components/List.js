import React from "react";
import { useGlobalStateContext } from "../Context/StateProvider";
import './List.css'

const List = ({index, list}) => {
    const {doneCheck} = useGlobalStateContext();
    return (
        <div className={doneCheck[index] ? "list list-item" : "list"}>
            <b>{list.toUpperCase()}</b>
        </div>
    )
}

export default List;