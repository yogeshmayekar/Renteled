import React, { useState } from "react";
import "./mailList.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MailList = ()=>{
    const navigate = useNavigate();
    const [sendEmail, setSendEmail] = useState({
        email: ""
    });

    const handleAdminLogin = (e)=>{
        navigate("/user/admin_register");
        e.preventDefault();
    }

    const handleSubscribe =async(e)=>{
        try{
            // console.log(sendEmail)
            const res =await axios.post("http://localhost:9090/api/email/subscribe_with_email",sendEmail);
            alert(res.data)
            // console.log(res)
        }catch(err){
            alert(err.response.data.message)
            // console.log(err.response.data.message)
        }
        
        setSendEmail({
            email: ""
        });
        e.preventDefault();
    }
    
    return(
        <>
        <div className="mailWrapper">
        <div className="mailContainer">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDiisc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" className="email__input" value={sendEmail.email} onChange={(e) => setSendEmail({ email: e.target.value })} />
                <button onClick={handleSubscribe} >Subscribe</button>
            </div>
            <button className="headerBtn" onClick={handleAdminLogin}>Admin Login</button>
        </div>
        </div>
        </>
    )
}

export default MailList;