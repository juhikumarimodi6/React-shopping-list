import React from 'react';
import Header from './Components/Header';
import ListUnit from './Components/ListUnit';
import InputAddUnit from './Components/InputAddUnit';
import './App.css';

function App() {

  const [input, setInput] = React.useState("");
  const [lists, setLists] = React.useState([]);
  const [count, setCount] = React.useState([]);
  const [doneCheck, setDoneCheck] = React.useState([]);

  return (
    <div className='app-container'>
      <Header />
      <InputAddUnit
        input = {input}
        setInput = {setInput}
        setLists = {setLists}
        setCount={setCount}
        setDoneCheck={setDoneCheck}
      />
      <div className='list-container'> 
      {lists.map((list , index) => {
          return <ListUnit 
                    key = {index}
                    index = {index}
                    count = {count}
                    setCount={setCount}
                    doneCheck = {doneCheck}
                    setDoneCheck = {setDoneCheck}
                    list = {list}
                    setLists = {setLists}
                  />
      })} 
      </div>
    </div>

  );
}

export default App;
