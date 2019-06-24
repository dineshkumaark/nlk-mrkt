import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import SearchInfo from './components/search/SearchInfo';
import Items from './components/products/Items';
import { Sidebar } from './components/navbar/Sidebar';
import './components/search/SearchInfo.css';
import './components/navbar/Navbar.css';
import './components/responsive/index.css';
function App() {
  return (
    <div className="App">
        <NavBar brand="NLK" highlight="MRKT"/>
        <SearchInfo />
        <Items />
        <Sidebar />
    </div>
  );
}

export default App;
