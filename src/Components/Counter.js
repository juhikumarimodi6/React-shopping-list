import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import './Counter.css'

const Counter = ({index, count, setCount}) => {

    const handleDecrement = (id) => {
        setCount(prevCount => {
            prevCount[id] = prevCount[id] === 0 ?  0 : prevCount[id] - 1;
            return [...prevCount]
        })
    }

    const handleIncrement = (id) => {
        console.log("inside handle increment" + count)
        setCount(prevCount => {
            console.log('prevcount[id] before' +prevCount[id])
            prevCount[id] = prevCount[id] + 1;
            console.log('prevcount[id] after ' +prevCount[id])
            return [...prevCount]
        })
    }

    console.log("in Counter.js count " + count)
    // console.log("in Counter.js doneCheck " + doneCheck)

    return (
        <div className="counter-container">
            <BiChevronLeft 
                className="left"
                onClick={() => handleDecrement(index)}
            />
            <div className="count">{count[index]}</div>
            <BiChevronRight 
                className="right"
                onClick={() => handleIncrement(index)}
            />
        </div>
    )
}

export default Counter;