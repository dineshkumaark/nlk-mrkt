import React from 'react';
import Products from './Products';
import CurrentProduct from './CurrentProduct';

const AllProducts = () => {
    
     return(
         <div className="allproducts container">
            <CurrentProduct />
            <Products />
         </div>
     );
}

export default AllProducts;

