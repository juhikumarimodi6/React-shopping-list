import React from "react";
import {MdDone} from "react-icons/md"
import { useGlobalStateContext } from "../Context/StateProvider";
import './Done.css'

const Done = ({index}) => {
    const {doneCheck, setDoneCheck} = useGlobalStateContext();
    const handleMarkDone = (id) => {
        setDoneCheck((prevDoneCheck) => {
          prevDoneCheck[id]=!prevDoneCheck[id];
          return [...prevDoneCheck];
        } )
    }

    return (
        <MdDone 
            className={doneCheck[index]? "done doneCheck" : "done"} 
            onClick={() => handleMarkDone(index)}
        />
    )
}

export default Done;