import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './test.module.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className={styles.test}>
          TEST
        </p>        
      </header>
    </div>
  );}

export default App;
