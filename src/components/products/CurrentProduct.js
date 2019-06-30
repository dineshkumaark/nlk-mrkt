import React , {Component} from 'react';
import './CurrentProduct.css';
class CurrentProduct extends Component{
    state = {
        current:{
            name: 'banana',
            price: 45,
            weight: '1',
            img:'./Images/Veggie/banana.png'
        }
    }
    render(){
        const {name,price,weight,img} = this.state.current;
        let formatter = new Intl.NumberFormat('en-in',{
            style: 'currency',
            currency:'inr'
        });
        return(
            <div className="currentproduct">
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
            <div className="p-desc">
              <div className="w-desc">
               <div>
                <label>Kg</label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
               </div>
                 <p className="p-or">or</p>
                 <div>
                 <label style={{marginTop:'13%'}}>Piece</label>
                <select>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                 </div>
              </div>
              <div className="p-basket">
                    <button className="p-button">Add to Basket</button>
              </div>
            </div>
            </div>
        );
    }
}



export default CurrentProduct;