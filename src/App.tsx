import React from 'react';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';
import Test from './components/Test';


function App() {

  const handleClick = () => {
    console.log("Button Clicked");
  }


 
 

  return (
    <div className="App">
      <header className="App-header">
        <Title title = "Hello World" gender = "male" age = {21}/>
        <Button value = "Click Me" style = "success" onClick = {handleClick}/>
        <Test/>
  
      </header>
    </div>
  );
}

export default App;
