import React from 'react';
import './App.css';
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
      <header className="App-header">
        <Title title = "Hello World" gender = "male" age = {num}/>
        <Button  style = "success" onClick = {addNumber}>+1</Button>
        <Button  style = "danger" onClick = {subNumber}>-1</Button>
        <Button  onClick = {handleClick2}>Alert Message</Button>
        <Test/>
        
  
      </header>
    </div>
  );
}

export default App;
