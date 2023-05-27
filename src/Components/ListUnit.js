import React from "react";
import Done from "./Done";
import Counter from "./Counter";
import List from "./List";
import './ListUnit.css'

const ListUnit = ({index, count, setCount, doneCheck, setDoneCheck, list}) => {
    return (
        <div className="list-container">
            <div className="list-done">
                <Done 
                    index={index}
                    doneCheck={doneCheck}
                    setDoneCheck={setDoneCheck}
                />
                <List 
                    index={index}
                    doneCheck={doneCheck}
                    list={list}
                />
            </div>
            <Counter 
                index = {index}
                count = {count}
                setCount={setCount}
            />
        </div>
    )
}

export default ListUnit;