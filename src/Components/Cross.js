import React from "react";
import {ImCross} from "react-icons/im";
import './Cross.css'

const Cross = ({index, setLists, setDoneCheck, setCount}) => {

    const deleteItem = (index) => {
        setLists(prevList => {
            prevList.splice(index,1)
            return [...prevList]
        }) 
        setDoneCheck(prevDoneCheck => {
            prevDoneCheck.splice(index,1)
            return [...prevDoneCheck]
        })
        setCount(prevCount => {
            prevCount.splice(index,1)
            return [...prevCount]
        })
    }

    return (
        <ImCross 
            className='cross'
            onClick={() => deleteItem(index)} 
        />
    )
}

export default Cross;