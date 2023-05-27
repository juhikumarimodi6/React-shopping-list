import React from "react";
import Input from "./Input";
import AddButton from "./AddButton";
import './InputAddUnit.css'

const InputAddUnit = ({input, setInput, setLists, setDoneCheck, setCount}) => {

    const UpdateList = () => {
        if(input !== "") {
            setLists((prevList) => {
                return [...prevList, input]
              })
            setDoneCheck(prevDoneCheck => [...prevDoneCheck, false])    //Default DoneCheck is false
            setInput("")
            setCount(prevCount => [...prevCount, 0])
        }
    }
    
    return(
        <div className="input-container">
            <Input
                input = {input} 
                setInput = {setInput} 
                UpdateList = {UpdateList}
            />
            <AddButton 
                UpdateList = {UpdateList}
            />
        </div>
    )
}

export default InputAddUnit;