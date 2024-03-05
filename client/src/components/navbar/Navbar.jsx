import './navbar.css';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { AuthContext } from '../../context/authContext';

function Navbar({isButtonRequired}){
    const loginContext = useContext(AuthContext);
    // console.log(loginContext.user);
    // const [openProfile, setOpenProfile] = useState(true);
    const navigate =useNavigate()
    const takeMeToHomePage =(e)=>{
        navigate("/")
        e.preventDefault();
    }

    const handleSignIn = (e)=>{
        navigate("/user/signin/with_diffrent/account");
        e.preventDefault();
      }
      
      const handleRegister = (e)=>{
        navigate("/user/signup/with_diffrent/account");
        e.preventDefault();
      }

      const handleProfile =(e)=>{
        navigate("/user/accont_details");
        e.preventDefault();
      }

    return(
        <>
        <div className="navbar">
        <div className="navContainer">
           <span className="logo" onClick={takeMeToHomePage}>RENTELED</span> 
           <div className="items">
           {loginContext.user ? 
           <div className="profilrPic" >
            <Avatar alt="YM" src="../../Assets/profile.JPG" onClick={handleProfile} />
           </div> :
            <>
            <button className="navButton" onClick={handleRegister}>Sign Up</button> 
            <button className="navButton" onClick={handleSignIn}>Sign In</button>
            </>
            }
          </div>           
        </div>
        </div>
        </>
    )
}

export default Navbar;