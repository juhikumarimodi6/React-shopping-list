import React from "react";
import Input from "./Input";
import AddButton from "./AddButton";
import { useGlobalStateContext } from "../Context/StateProvider";
import './InputAddUnit.css'

const InputAddUnit = () => {
    const {input, setInput, setLists, setDoneCheck, setCount} = useGlobalStateContext();

    const UpdateList = () => {
        if(input !== "") {
            setLists((prevList) => {
                return [...prevList, input]
              })
            setDoneCheck(prevDoneCheck => [...prevDoneCheck, false])    //Default DoneCheck is false
            setInput("")
            setCount(prevCount => [...prevCount, 1])
        }
    }
    
    return(
        <div className="input-container">
            <Input
                UpdateList = {UpdateList}
            />
            <AddButton 
                UpdateList = {UpdateList}
            />
        </div>
    )
}

export default InputAddUnit;