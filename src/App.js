import React, { useState, memo, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './Result';

function App() {
  console.log('app')

  return (
    <div className="App">
      <Result />
    </div>
  );
}



export default App;
