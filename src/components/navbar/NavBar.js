import React from 'react';
import {connect} from 'react-redux';
// import  addCounter  from '../../actionTypes/action';
function NavBar(props){
    const addCounts = () =>{
        console.log(props.counter);
        props.addCounter();
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
                        <li><a href="#" className="m-hide" onClick={addCounts}>My Account</a></li>
                        <li><a href="#" className="m-hide">Orders</a></li>
                        <li><a href="#" className="m-hide">Coupouns</a></li>
                        <li onClick={()=>console.log(props.cart)}><img src="./Images/shopping-basket.svg" width="30px" height="30px" alt="shopping basket"/></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}
const mapStatetoProps = (state) =>{
    return{
        cart: state.current.cart
    }
}
const mapDispatchTpProps = (dispatch) => {
    return{
        addCounter: () => dispatch({type:'ADD',payload:1})
    }
}

export default connect(mapStatetoProps,mapDispatchTpProps)(NavBar);