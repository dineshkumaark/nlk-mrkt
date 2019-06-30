import React,{Component} from 'react';
import slide from './slide';

class ProductNavbar extends Component{ 
    state = {
        categories: ['Groceries','Steak,fish','Dairy','Food','Beverage','Cleaning'],
        imgs: ['c-groceries.png','c-turkey.png','c-apple.png','c-diet.png','c-salad.png','c-asparagus.png']
    }
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
        const {categories,imgs} = this.state;
        return(
            <div className="container">
                <div className="c-head">
                  <h1>Categories</h1>
                </div>
                <div className="categories">
                <ul className="c-ul">
                
                {categories.map((item,index)=>(
                        (index === 0) ?<li className="c-active p-li" key={index}>{item}</li> :<li className="p-li" key={index}>{item}</li>
                ))}
                </ul>
                    <div className="c-hide">
                        {categories.map((item,index)=>(
                            <div className="f-prod" key={index}>
                                <img src={`./Images/Veggie/${imgs[index]}`} width="35px" height="35px" alt={item}/>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        );
    }
    
}

export default ProductNavbar;