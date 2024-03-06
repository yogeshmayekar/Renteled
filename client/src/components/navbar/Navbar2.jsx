import './navbar.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar2(){
    const navigate =useNavigate()
    const takeMeToHomePage =(e)=>{
        navigate("/")
        e.preventDefault();
    }

    return(
        <>
        <div className="navbar2">
        <div className="navContainer">
           <span className="logo" onClick={takeMeToHomePage}>RENTELED</span>           
        </div>
        </div>
        </>
    )
}

export default Navbar2;