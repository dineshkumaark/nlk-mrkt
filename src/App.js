import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import './components/navbar/Navbar.css';
import {Sidebar } from './components/navbar/Sidebar';
function App() {
  return (
    <div className="App">
        <NavBar brand="NLK" highlight="MRKT"/>
        <Sidebar />
    </div>
  );
}

export default App;
