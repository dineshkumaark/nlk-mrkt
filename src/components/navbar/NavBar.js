import React from 'react';
import {connect} from 'react-redux';
// import  addCounter  from '../../actionTypes/action';
function NavBar(props){
    const showCart= ()=>{
        const { cart ,  count } = props;
        if(cart.length === 0){
            alert('No Items');
        }else{
            console.log(cart);
            console.log(count);
        }
    }

    return(
        <div className="container">
        <nav>
            <div className="brand">
            <h4><img src="./Images/brand.png" height="50px" alt="brand"/></h4>
            <span className="solidBrand">{props.brand}<span className="mark">{props.highlight}</span></span>
            </div>
            <div className="main-nav">
                <div className="lang m-hide">
                    <ul>
                        <li><a href="#" >English</a></li>
                    </ul>
                </div>
                <div className="cart-prop">
                    <ul>
                        <li><a href="#" className="m-hide">My Account</a></li>
                        <li><a href="#" className="m-hide">Orders</a></li>
                        <li><a href="#" className="m-hide">Coupouns</a></li>
                        <li onClick={()=> showCart()}><img src="./Images/shopping-basket.svg" width="30px" height="30px" alt="shopping basket"/>{(props.cart.length > 0) ? <span className="badge">{props.cart.length}</span> : ''}</li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}
const mapStatetoProps = (state) =>{
    return{
        cart: state.current.cart,
        count: state.current.count
    }
}


export default connect(mapStatetoProps)(NavBar);