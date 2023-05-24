import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Grid from './Components/GridSystem';
import GridSystem from './Components/GridSystem';
import MenuToggle from './Components/MenuToggle';
import { shortAudio } from './data';

function App() {

  return (
    <html>
      <head>
        <title>Future Ancestors</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
      </head>

      <Header/> 

      <MenuToggle/> 

      <GridSystem data={shortAudio}/>
        
    </html>
  );
}

export default App;
