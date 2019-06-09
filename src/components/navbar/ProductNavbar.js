import React from 'react';

const ProductNavbar = () =>{ 
    return(
        <div className="container">
            <div className="c-head">
              <h1>Categories</h1>
            </div>
            <div className="categories">
                <ul className="c-ul">
                    <li className="c-active">Groceries</li>
                    <li>Steak,fish</li>
                    <li>Dairy</li>
                    <li>Food</li>
                    <li>Beverage</li>
                    <li>Cleaning</li>
                </ul>
            </div>
        </div>
    );
}

export default ProductNavbar;