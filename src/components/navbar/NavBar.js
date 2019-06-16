import React from 'react';
function NavBar(props){
    return(
        <div className="container">
        <nav>
            <div className="brand">
            <h4><img src="./Images/brand.png" height="50px" alt="brand"/></h4>
            <span className="solidBrand">{props.brand}<span className="mark">{props.highlight}</span></span>
            </div>
            <div className="main-nav">
                <div className="lang">
                    <ul>
                        <li><a href="#">English</a></li>
                    </ul>
                </div>
                <div className="cart-prop">
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Coupouns</a></li>
                        <li><img src="./Images/shopping-basket.svg" width="30px" height="30px" alt="shopping basket"/></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default NavBar;