import React from "react";
import './Input.css'

const Input = ({input, setInput, UpdateList}) => {

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
                placeholder='List here...'
                onChange={handleInput}
                onKeyDown={handleEnter}
                value={input}
                className='input-box'
            />
    )
}

export default Input;