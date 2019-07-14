import React,{Component} from 'react';
import slide from './slide';
import {connect} from 'react-redux';

class ProductNavbar extends Component{ 
    currentCategories = (e)=>{
        this.props.menu(e);
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
       const {categories,imgs,current} = this.props.current;
        return(
            <div className="container">
                <div className="c-head">
                  <h1>Categories</h1>
                </div>
                <div className="categories">
                {/* Categories Menu Mapping */}
                <ul className="c-ul">
                {categories.map((item,index)=>(
                        (index === 0) ?<li className="c-active p-li" key={index} onClick={() => this.currentCategories(item)}>
                                {item}
                        </li> :<li className="p-li" key={index} onClick={() => this.currentCategories(item)}>
                                {item}
                        </li>
                ))}
                </ul>
                {/* Categories for Mobile Version */}
                    <div className="c-hide">
                        {categories.map((item,index)=>(
                            <div className="f-prod" key={index} onClick={() => this.currentCategories(item)}>
                                <img src={`./Images/Veggie/${imgs[index]}`} width="35px" height="35px" alt={item} />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="c-head m-show">
                        <h1>{current}</h1>
                    </div>
                </div>
            </div>
        );
    }
    
}
const mapStateToProps = (state) => {
    return{
        current: state.current
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        menu: (current)=> dispatch({type:'CURRENT',payload: current})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductNavbar);