import React from 'react';
import Input from './Components/Input';
import Header from './Components/Header';
import List from './Components/List';
import './App.css';

function App() {

  const [input, setInput] = React.useState("");
  const [list, setList] = React.useState([]);

  return (
    <div className='app-container'>
      <Header />
      <Input
        input = {input}
        setInput = {setInput}
        list = {list}
        setList = {setList}
      />
      {/* <List /> */}
    </div>

  );
}

export default App;
