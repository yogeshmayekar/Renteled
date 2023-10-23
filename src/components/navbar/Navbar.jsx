import './navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate =useNavigate()
    const takeMeToHomePage =(e)=>{
        navigate("/")
        e.preventDefault();
    }

    return(
        <>
        <div className="navbar">
        <div className="navContainer">
           <span className="logo" onClick={takeMeToHomePage}>RENTELED</span> 
           <div className="items">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
           </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;