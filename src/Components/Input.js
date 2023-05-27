import React from "react";
import './Input.css'

const Input = ({input, lists, doneCheck, count, setInput, setLists, setDoneCheck, setCount}) => {

    const handleInput = (event) => {
        setInput(event.target.value)
    }
      
    const handleEnter = (event) => {
        if(input.length > 0 && event.key === 'Enter') {
            setLists(prevlist => [...prevlist, input]);
            setInput("")
            setDoneCheck(prevDone => {
                console.log("in handle enter ")
                return [...prevDone, false]
            })
            
            setCount(prevCount => {
                console.log("inside input" + prevCount)
                return [...prevCount, 0]
            })
        }
    }
    
    const handleAdd = () => {
        if(input.length > 0){
            setLists(prevlist => [...prevlist, input]);
            setInput("")
            setDoneCheck(prevDone => {
                return [...prevDone, false]
            })
            setCount(prevCount => {
                return [...prevCount, 0]
            })
        }
    }
    
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