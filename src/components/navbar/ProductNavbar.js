import React,{Component} from 'react';
import slide from './slide';

class ProductNavbar extends Component{ 
    componentWillMount(){
        console.log("hi everyone");
    }
    componentDidMount(){
            const li = document.querySelectorAll('.p-li');
            li.forEach((e,i)=>{
                e.addEventListener('click',(el)=>{
                    li.forEach((j )=>{
                        j.classList.remove('c-active');
                        j.style.background = "transparent";
                    }  
                    );
                    el.target.classList.add('c-active');
                    el.target.style.background = `${slide(i)}`;
                })
            });
    }
    componentDidUpdate(){
        console.log('updating');
    }
    render(){
        return(
            <div className="container">
                <div className="c-head">
                  <h1>Categories</h1>
                </div>
                <div className="categories">
                    <ul className="c-ul">
                        <li className="c-active p-li">Groceries</li>
                        <li className="p-li">Steak,fish</li>
                        <li className="p-li">Dairy</li>
                        <li className="p-li">Food</li>
                        <li className="p-li">Beverage</li>
                        <li className="p-li">Cleaning</li>
                    </ul>
                </div>
            </div>
        );
    }
    
}

export default ProductNavbar;