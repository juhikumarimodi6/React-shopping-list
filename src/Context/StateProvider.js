import React, {createContext, useContext} from "react";

const StateContext = createContext();

const StateProvider = ({children}) => {
    const [input, setInput] = React.useState("");
    const [lists, setLists] = React.useState([]);
    const [count, setCount] = React.useState([]);
    const [doneCheck, setDoneCheck] = React.useState([]);

    return (
        <StateContext.Provider
            value = {{
                input, setInput,
                lists, setLists,
                count, setCount,
                doneCheck, setDoneCheck,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

const useGlobalStateContext = () => {
    return useContext(StateContext);
}

export {StateContext, StateProvider, useGlobalStateContext}