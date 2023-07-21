import React from "react";
import { useGlobalStateContext } from "../Context/StateProvider";
import './List.css'

const List = ({index, list}) => {
    const {doneCheck, setInput} = useGlobalStateContext();
    const handleEditList = () => {
        setInput(list);
    }
    return (
        <div className={doneCheck[index] ? "list list-item" : "list"} onClick={handleEditList}>
            <b>{list.toUpperCase()}</b>
        </div>
    )
}

export default List;