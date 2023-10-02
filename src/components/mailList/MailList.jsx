import React from "react";
import "./mailList.css";

const MailList = ()=>{
    return(
        <>
        <div className="mailContainer">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDiisc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
        </>
    )
}

export default MailList;