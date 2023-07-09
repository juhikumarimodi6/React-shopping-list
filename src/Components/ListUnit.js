import React from "react";
import Done from "./Done";
import Counter from "./Counter";
import List from "./List";
import Cross from "./Cross";
import './ListUnit.css'


const ListUnit = ({index, list}) => {
    return (
        <div className="list-unit">
            <div className="list-done-cross">
                <div className="list-done">
                    <Done 
                        index={index}
                    />
                    <List 
                        index={index}
                        list={list}
                    />
                </div>
                <div>
                    <Cross
                        index = {index} 
                    />
                </div>
            </div>
            <div className="counter-crossunit">
                <b>Qty:</b>
                <Counter 
                    index = {index}
                />
            </div>
        </div>
    )
}

export default ListUnit;