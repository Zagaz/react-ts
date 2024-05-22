import React from 'react';
import './App.css';
import './AppSecond.css'
import Button from './components/Button';
import Title from './components/Title';
import Test from './components/Test';
import PageTest from './components/PageTest';
import Menu from './components/Menu';

function App() {

  return (
    <>
      <div className="App">
        <header className="App-header ">
          <Menu />
          <div className='app-container'>

            <PageTest />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
