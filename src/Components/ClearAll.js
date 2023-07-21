import React from 'react'
import { useGlobalStateContext } from '../Context/StateProvider'
import './ClearAll.css'

const ClearAll = () => {
    const {setInput, setLists, setCount, setDoneCheck} = useGlobalStateContext();
    const handleClearAll = () => {
        setInput("");
        setLists([]);
        setCount([]);
        setDoneCheck([]);
    }
  return (
    <button className="clearall" onClick={handleClearAll}>Clear All</button>
  )
}

export default ClearAll
