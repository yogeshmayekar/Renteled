import './navbar.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar(){

    const navigate =useNavigate()
    const takeMeToHomePage =(e)=>{
        navigate("/")
        e.preventDefault();
    }

    const handleSignIn = (e)=>{
        navigate("/user/Sign-in");
        e.preventDefault();
      }
      
      const handleRegister = (e)=>{
        navigate("/user/Sign-Up");
        e.preventDefault();
      }

    return(
        <>
        <div className="navbar">
        <div className="navContainer">
           <span className="logo" onClick={takeMeToHomePage}>RENTELED</span> 
           <div className="items">
           <button className="navButton" onClick={handleRegister}>Sign Up</button> 
           <button className="navButton" onClick={handleSignIn}>Sign In</button>
          </div>           
        </div>
        </div>
        </>
    )
}

export default Navbar;