import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import SearchInfo from './components/search/SearchInfo';
import  ProductNavbar from './components/navbar/ProductNavbar';
import AllProducts from './components/products';
import { Sidebar } from './components/navbar/Sidebar';
import './components/search/SearchInfo.css';
import './components/navbar/Navbar.css';
function App() {
  return (
    <div className="App">
        <NavBar brand="NLK" highlight="MRKT"/>
        <SearchInfo />
        <ProductNavbar />
        <AllProducts />
        <Sidebar />
    </div>
  );
}

export default App;
