import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title = "Hello World" />
        <Button value = "Oiii" style='light' />
   

      </header>
    </div>
  );
}

export default App;
