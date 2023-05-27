import React from "react";
import Done from "./Done";
import Counter from "./Counter";
import List from "./List";
import Cross from "./Cross";
import './ListUnit.css'


const ListUnit = ({index, count, setCount, doneCheck, setDoneCheck, list, setLists}) => {
    return (
        <div className="list-unit">
            <div className="list-done-cross">
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
                <div>
                    <Cross
                        index = {index} 
                        setLists = {setLists}
                        setDoneCheck = {setDoneCheck}
                        setCount={setCount}
                    />
                </div>
            </div>
            <div className="counter-crossunit">
                <b>Qty:</b>
                <Counter 
                    index = {index}
                    count = {count}
                    setCount={setCount}
                />
                {/* <Cross
                    index = {index} 
                    setLists = {setLists}
                    setDoneCheck = {setDoneCheck}
                    setCount={setCount}
                /> */}
            </div>
        </div>
    )
}

export default ListUnit;