import React from "react";
import "./mailList.css";
import { useNavigate } from 'react-router-dom';

const MailList = ()=>{
    const navigate = useNavigate();

    const handleAdminLogin = (e)=>{
        navigate("/user/admin-register");
        e.preventDefault();
    }
    
    return(
        <>
        <div className="mailContainer">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDiisc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
            <button className="headerBtn" onClick={handleAdminLogin}>Admin Login</button>
        </div>
        </>
    )
}

export default MailList;