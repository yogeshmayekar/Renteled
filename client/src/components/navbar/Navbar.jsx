import './navbar.css';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';
import { AuthContext } from '../../context/authContext';
import { TokenContext } from '../../context/tokenContext';
import axios from 'axios';

function Navbar({isButtonRequired}){
    const {dispatch} = useContext(AuthContext);
    const{expiryDate, dispatch66}=useContext(TokenContext)
    // console.log(expiryDate);
    // const [openProfile, setOpenProfile] = useState(true);
    const localToken = Cookies.get('access_token');
    const navigate =useNavigate()
    const takeMeToHomePage =(e)=>{
        navigate("/")
        e.preventDefault();
    }

    if(!localToken){
      localStorage.removeItem("user");
      localStorage.removeItem("expiryDate");
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

      const logout=async(e)=>{
        try{
        const res = await axios.post("/auth/logout");
            console.log(res.data.message);
            dispatch({type: "LOGOUT"});
            dispatch66({type:"LOGOUT"});
            Cookies.remove("access_token");
            localStorage.removeItem("user");
            navigate("/");
            e.preventDefault();
        }catch(error){
          console.log(error);
        }
      }

      useEffect(() => {
        const checkTokenExpiry = () => {
          if(localToken && expiryDate){
            const expiry = new Date(expiryDate);
            const now = new Date();
    
            if(now >= expiry){
              logout()
            }else{
              const timeout = expiry.getTime() - now.getTime();
              setTimeout(checkTokenExpiry, timeout);
            }
        }
        }

        checkTokenExpiry();

        return () => {
          clearTimeout(); // Clear any pending timeouts
        };
    }, [expiryDate]);

    return(
        <>
        <div className="navbar">
        <div className="navContainer">
           <span className="logo" onClick={takeMeToHomePage}>RENTELED</span> 
           <div className="items">
           {localToken ? 
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