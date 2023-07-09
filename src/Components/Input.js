import React from "react";
import { useGlobalStateContext } from "../Context/StateProvider";
import './Input.css'

const Input = ({UpdateList}) => {
    const {input, setInput} = useGlobalStateContext();
    const handleInput = (event) => {
        setInput(event.target.value)
    }
      
    const handleEnter = (event) => {
        if(event.key === 'Enter') {
            UpdateList()
        }
    }
    
    return(
            <input
                type="text"
                placeholder='Add an item...'
                onChange={handleInput}
                onKeyDown={handleEnter}
                value={input}
                className='input-box'
            />
    )
}

export default Input;