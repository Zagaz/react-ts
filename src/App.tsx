import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';
import Test from './components/Test';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title = "Hello World" gender = "male" age = {20}/>
        <Button value = "Oiii" style='success'/>
        <Test/>
  
      </header>
    </div>
  );
}

export default App;
