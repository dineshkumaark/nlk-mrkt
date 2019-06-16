import React from 'react';
import AllProducts from './index';
import ProductNavbar from '../navbar/ProductNavbar';

const Items = ()=>{
    function slidebtn(e){
        console.log(e.target.textContent);
    }
    return(
        <React.Fragment>
            <ProductNavbar onClick={slidebtn}/>
            <AllProducts />
        </React.Fragment>
    );
}

export default Items;