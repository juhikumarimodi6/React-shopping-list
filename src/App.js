import React from 'react';
import Input from './Components/Input';
import Header from './Components/Header';
import ListUnit from './Components/ListUnit';
import './App.css';

function App() {

  const [input, setInput] = React.useState("");
  const [lists, setLists] = React.useState([]);
  const [count, setCount] = React.useState([]);
  const [doneCheck, setDoneCheck] = React.useState([]);

  console.log("in app count " + count)
  console.log("in app doneCheck " + doneCheck)

  return (
    <div className='app-container'>
      <Header />
      <Input
        input = {input}
        setInput = {setInput}
        lists = {lists}
        setLists = {setLists}
        count = {count}
        setCount={setCount}
        doneCheck={doneCheck}
        setDoneCheck={setDoneCheck}
      />

      {lists.map((list , index) => {
          return <ListUnit 
                    key = {index}
                    index = {index}
                    count = {count}
                    setCount={setCount}
                    doneCheck = {doneCheck}
                    setDoneCheck = {setDoneCheck}
                    list = {list}
                  />
      })}
    </div>

  );
}

export default App;
