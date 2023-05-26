import React from "react";
import './Input.css'

const Input = ({input, list, setInput, setList}) => {

    const handleInput = (event) => {
        setInput(event.target.value)
    }
      
    const handleEnter = (event) => {
        if(event.key === 'Enter') {
            setList(prevlist => [...prevlist, input]);
            setInput("")
        }
    }
    
    const handleAdd = () => {
        setList(prevlist => [...prevlist, input]);
        setInput("")
    }
    console.log(list)
    return(
        <div className="input-container">
            <input
                type="text"
                placeholder='List here...'
                onChange={handleInput}
                onKeyDown={handleEnter}
                value={input}
                className='input-box'
            />
            <button onClick={handleAdd} className='add-button'>+</button>
        </div>
    )
}

export default Input;