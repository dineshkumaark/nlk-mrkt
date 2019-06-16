import React , { Component } from 'react';
import data from '../data/data.json';
class Products extends Component {
    render(){
        const { veggie } = data;
        let formatter = new Intl.NumberFormat('en-in',{
            style: 'currency',
            currency:'inr'
        });
        return(
            <div className="mapproduct">
             {veggie.map(({name,price,weight,img},i)=>(
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
                 </div>
             ))
                
             }
            </div>
        );
    }
}

export default Products;