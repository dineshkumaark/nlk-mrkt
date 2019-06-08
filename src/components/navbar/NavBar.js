import React from 'react';

function NavBar(props){
    return(
        <div className="container">
        <nav>
            <h4>{props.brand}<span className="mark">{props.highlight}</span></h4>
            <span className="solidBrand">{props.brand}<span className="mark">{props.highlight}</span></span>
        </nav>
        </div>
    );
}

export default NavBar;