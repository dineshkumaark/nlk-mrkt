import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import SearchInfo from './components/search/SearchInfo';
import  ProductNavbar from './components/navbar/ProductNavbar';
import  CurrentProduct from './components/products/CurrentProduct';
import './components/search/SearchInfo.css';
import './components/navbar/Navbar.css';
import { Sidebar } from './components/navbar/Sidebar';
function App() {
  return (
    <div className="App">
        <NavBar brand="NLK" highlight="MRKT"/>
        <SearchInfo />
        <ProductNavbar />
        <CurrentProduct />
        <Sidebar />
    </div>
  );
}

export default App;
