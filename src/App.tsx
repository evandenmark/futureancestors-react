import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Grid from './Components/GridSystem';
import GridSystem from './Components/GridSystem';
import MenuToggle from './Components/MenuToggle';
import { fullAudio, shortAudio } from './data';
import { Display } from './Components/types';
import { shuffleArray } from './utils';

function App() {

  const [display, setDisplay] = useState(Display.SHORT)

  //shuffle the shorts, allow fulls to go in chronological order
  const audioData = display == Display.SHORT ? shuffleArray(shortAudio) : fullAudio;

  return (
    <html>
      <head>
        <title>Future Ancestors</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
      </head>

      <Header display={display} setDisplay={setDisplay}/> 

      <GridSystem data={audioData}/>
        
    </html>
  );
}

export default App;
