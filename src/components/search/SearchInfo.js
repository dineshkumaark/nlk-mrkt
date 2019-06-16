import React from 'react';

const SearchInfo = () => {
    return(
        <div className="SearchInfo container">
            <div className="search-box">
                <input type="text" placeholder="Icecream"/>
                <button type="submit">Search</button>
            </div>
            <div className="delivery">
                <div className="f-delivery">
                    <div className="f-desc">
                    <span>Free Delivery</span><br />
                    <p>Over $50 orders</p>
                    </div>
                    <img src="./Images/free-delivery.svg" width="40px" height="40px" alt="delivery"/>
                </div>
                <div className="timer">
                    <div className="t-desc">
                    <span>Shop Online</span><br />
                    <p>get your shopping in same day</p>
                    </div>
                    <img src="./Images/timer.svg" width="30px" height="30px" alt="timer"/>
                </div>
            </div>
        </div>
    );
}

export default SearchInfo;