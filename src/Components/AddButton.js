import React from "react";
import './AddButton.css'

const AddButton = ({UpdateList}) => {

    const handleAdd = () => {
        UpdateList()
    }

    return (
        <button onClick={handleAdd} className='add-button'>+</button>
    )
}

export default AddButton;
