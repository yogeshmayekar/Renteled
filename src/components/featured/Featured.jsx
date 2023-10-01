import React from 'react';
import jaipur from '../../Assets/jaipur2.jpg';
import goa from '../../Assets/Goa.jpeg';
import bangalore from '../../Assets/bangalore.jpg';
import './featured.css';

function Featured(){
    return(
        <div className="featuredContainer">
            <div className="featuredItems">
                <img src={jaipur} alt="jaipur" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Jaipur</h1>
                    <h2>543 Properties</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src={goa} alt="Goa" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Goa</h1>
                    <h2>064 Properties</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src={bangalore} alt="Bangalore" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Bangalore</h1>
                    <h2>316 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured;