import React from 'react';
import Header from './Components/Header';
import ListUnit from './Components/ListUnit';
import InputAddUnit from './Components/InputAddUnit';
import { useGlobalStateContext } from './Context/StateProvider';
import './App.css';

function App() {
  const {lists} = useGlobalStateContext();
  return (
    <div className='app-container'>
      <Header />
      <InputAddUnit />
      <div className='list-container'> 
      {lists.map((list , index) => {
          return <ListUnit 
                    key = {index}
                    index = {index}
                    list = {list}
                  />
      })} 
      </div>
    </div>

  );
}

export default App;
