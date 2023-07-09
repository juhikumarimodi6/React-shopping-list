import React from "react";
import { useGlobalStateContext } from "../Context/StateProvider";
import './Counter.css'

const Counter = ({index}) => {
    const {count, setCount} = useGlobalStateContext();
    
    const handleDecrement = (id) => {
        setCount(prevCount => {
            prevCount[id] = prevCount[id] === 1 ?  1 : prevCount[id] - 1;
            return [...prevCount]
        })
    }

    const handleIncrement = (id) => {
        setCount(prevCount => {
            prevCount[id] = prevCount[id] + 1;
            return [...prevCount]
        })
    }

    return (
        <div className="counter-container">
            <button 
                className="left"
                onClick={() => handleDecrement(index)}
            > - </button>

            <div className="count">{count[index]}</div>
            {console.log(count)}
            <button 
                className="right"
                onClick={() => handleIncrement(index)}
            > + </button>
        </div>
    )
}

export default Counter;