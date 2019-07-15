import React , { Component } from 'react';
import {connect} from 'react-redux';
class Products extends Component {
    changeValues = (name)=>{
        const { allProducts } = this.props.allProducts;
        const { current , cart} = this.props.currentProduct;
        const shop = allProducts[current][name];
        this.props.addToCart(shop);
        //console.log(shop);
        // console.log(this.props.currentProduct.cart);
    }
    render(){
        const { allProducts } = this.props.allProducts;
        let { current }= this.props.currentProduct;
        // console.log(allProducts[current]);
        let formatter = new Intl.NumberFormat('en-in',{
            style: 'currency',
            currency:'inr'
        });
        return(
            <div className="mapproduct">
             {allProducts[current].map(({name,price,weight,img},i)=>(
                 <div className="product" key={i}>
                     <div className="p-name">
                         <h5>{name}</h5>
                         <div className="p-weight">
                             <p>{weight}KG</p>
                             <p className="p-price">{formatter.format(price)}</p>
                         </div>
                     </div>
                     <div className="p-image">
                         <img src={img} alt={name} width="140px" height="100px"/>
                     </div>
                     <div className="p-details">
                            <button>-</button>
                             <input type="number" className="quantity" defaultValue="1"/>
                            <button>+</button><br/>
                            <button className="p-button p-cls" onClick={()=> this.changeValues(i)}>Add to Basket</button>
                     </div>
                 </div>
             ))
                
             }
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        currentProduct: state.current,
        allProducts: state.products,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        changeCurrent: (change)=> dispatch({type:'CHANGE_CURRENT',payload: change}),
        addToCart: (cart)=> dispatch({type:'ADD_TO_CART',payload:cart}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);