import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title = "Hello World" gender = "male" age = {20}/>
        <Button value = "Oiii" style='success'/>
  
      </header>
    </div>
  );
}

export default App;
