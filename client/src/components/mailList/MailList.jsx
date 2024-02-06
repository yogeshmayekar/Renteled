import React, { useState } from "react";
import "./mailList.css";
import { useNavigate } from 'react-router-dom';

const MailList = ()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleAdminLogin = (e)=>{
        navigate("/user/admin-register");
        e.preventDefault();
    }

    const handleSubscribe =(e)=>{
        setEmail('');
        e.preventDefault();
    }
    
    return(
        <>
        <div className="mailContainer">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDiisc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" className="email__input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleSubscribe} >Subscribe</button>
            </div>
            <button className="headerBtn" onClick={handleAdminLogin}>Admin Login</button>
        </div>
        </>
    )
}

export default MailList;