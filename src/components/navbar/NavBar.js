import React from 'react';
import {connect} from 'react-redux';
// import  addCounter  from '../../actionTypes/action';
function NavBar(props){
    let formatter = new Intl.NumberFormat('en-in',{
        style: 'currency',
        currency:'inr'
    });
    const showCart= ()=>{
        const { carts ,  count } = props;
         props.showModel();
        if(carts.length === 0){
            // alert('No');
        }else{
            console.log(carts);
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
                        <li onClick={()=> showCart()}><img src="./Images/shopping-basket.svg" width="30px" height="30px" alt="shopping basket"/>{(props.carts.length > 0) ? <span className="badge">{props.carts.length}</span> : ''}</li>
                    </ul>
                    {(props.cart.showModel) ?
                     <div className="modal">
                        {(props.carts.length > 0) ? 
                            <React.Fragment>
                                {props.carts.map((item,index)=>(
                                    <li key={index} className="cart-items">
                                        <div>
                                         <img src={item.img} width="48px" height="48px" className="cart-sm-img"/>   
                                        </div>
                                       <div className="cart-details">
                                            <p className="pro-name">{item.name} - {item.weight} Kg</p>
                                            <p className="pro-c">{formatter.format(item.price)}</p>
                                       </div>
                                       <div className="cart-price">
                                            <p>{item.price}</p>
                                       </div>
                                    </li>
                                )
                                )}
                            </React.Fragment>
                        :
                            <React.Fragment>
                                <img src="./Images/Veggie/empty-cart.png" className="empty-cart"/>
                                <h5>Your Cart is Empty!</h5>
                            </React.Fragment>
                        }
                        
                     </div>
                     :''}
                </div>
            </div>
        </nav>
        </div>
    );
}
const mapStatetoProps = (state) =>{
    return{
        carts: state.current.cart,
        cart: state.cart,
        count: state.current.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        showModel: ()=> dispatch({type:'SHOW_MODEL'})
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(NavBar);