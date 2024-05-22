import React from 'react';
import './App.css';
import './AppSecond.css'
import Button from './components/Button';
import Title from './components/Title';
import Test from './components/Test';
import { useState } from 'react';


function App() {

  const [num, setNum] = useState<number>(0);


 // function handleClick return number

 function addNumber(): void {
   setNum(num + 1);

 }

 function subNumber():void {
  setNum(num - 1);

}

 function handleClick2(): void {
    const date = new Date();
    const currentDate = date.toDateString();
   alert (`Void function and vale at: ${currentDate}`)
   alert (`The type of num is: ${stringfyNum()}`)
  }
  
   function stringfyNum(): string {
    return (typeof num)
  }



  return (
    <div className="App">
      <header className="App-header ">
        <div className='app-container'>
          <div className='app-container__top'>
        <Title title = "Hello World" gender = "male" age = {num}/>
        </div>
        
        <div className='app-container__middle'>
        <Button  style = "success" onClick = {addNumber}>+1</Button>
        <Button  style = "danger" onClick = {subNumber}>-1</Button>
        </div>

        <div className='app-container__bottom'>
        <Button  onClick = {handleClick2}>Alert Message</Button>
        </div>
        
        </div>
      </header>
    </div>
  );
}

export default App;
