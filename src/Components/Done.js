import React from "react";
import {MdDone} from "react-icons/md"
import './Done.css'

const Done = ({index, doneCheck, setDoneCheck}) => {

    const handleMarkDone = (id, event) => {
        setDoneCheck((prevDoneCheck) => {
          prevDoneCheck[id]=!prevDoneCheck[id];
          return [...prevDoneCheck];
        } )
    }

    // console.log("in Done count " + count)
    console.log("in Done doneCheck " + doneCheck)

    return (
        <MdDone 
            className={doneCheck[index]? "done doneCheck" : "done"} 
            onClick={() => handleMarkDone(index)}
        />
    )
}

export default Done;