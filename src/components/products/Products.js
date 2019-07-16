import React , { Component } from 'react';
import {connect} from 'react-redux';
class Products extends Component {
     addQuantity = (e,index) => {
         const symbol = e.target.textContent; 
         const { allProducts } = this.props.allProducts;
         let { current }= this.props.currentProduct;
         const { count } = this.props.currentProduct;
         const changePrice = allProducts[current][index];
         console.log(allProducts);
        switch(symbol){
            case '+':
                const newProducts = {...changePrice,count: changePrice.count + 1};
                console.log(index)
                this.props.addCount('ADD_COUNT',{newProducts,current,index});
                return;
            case '-':
                    const newProduct = {...changePrice,count: changePrice.count - 1};
                this.props.addCount('SUB_COUNT',newProduct);
                return;
            default:
                return count;
        }
     }
    changeValues = (name)=>{
        const { allProducts } = this.props.allProducts;
        const { current } = this.props.currentProduct;
        const shop = allProducts[current][name];
        this.props.addToCart(shop);
        console.log(shop);
        // console.log(this.props.currentProduct.cart);
    }
    render(){
        const { allProducts } = this.props.allProducts;
        let { current }= this.props.currentProduct;
        let formatter = new Intl.NumberFormat('en-in',{
            style: 'currency',
            currency:'inr'
        });
        return(
            <div className="mapproduct">
             {allProducts[current].map(({name,price,weight,img,count},i)=>(
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
                            {(count === 1 ? <button className="p-dec" onClick={this.addQuantity} disabled>-</button>: <button className="p-dec" onClick={(e) => this.addQuantity(e,i)}>-</button> )}
                             <input type="number" className="quantity" value={count} min="1" max="10" onChange={()=> console.log(1)}/>
                             {(count === 10 ? <button className="p-inc" disabled>+</button>: <button className="p-inc" onClick={(e) => this.addQuantity(e,i)}>+</button> )}
                            <br/>
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
        addCount: (quantity,price)=> dispatch({type: quantity,payload: price}),
        addToCart: (cart)=> dispatch({type:'ADD_TO_CART',payload:cart})
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);