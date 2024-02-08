import React from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import googleImage from '../../Assets/googleIcon.png';
import facebookImage from '../../Assets/facebookIcon.png';

const SigninBegains= ()=>{
    const navigate = useNavigate()
    const continueNext= ()=>{
        navigate("/user/Sign_In")
    }

    const submitCloseBtn=()=>{
       navigate(-1); 
    }
    return(
        <div className="maincon">
        <div className="registerContainer2">
            <CloseIcon className="closeButton" onClick={submitCloseBtn} />
            <Typography component="h2" variant="h5" sx={{textAlign:'center', mt:1}}>
                 Sign in 
            </Typography>
            <Typography component="h4" variant="h6" sx={{textAlign:'center', mb:3}}>
                 Rentled.com
            </Typography>

            <div className="external__container">
                <div className="google__buttom">
                    <img src={googleImage} alt="google icon" width={"25px"} height={"25px"} className="google__Icon" />
                    <p>Sign in with Google</p>  
                </div>
                <div className="facebook__buttom">
                    <img src={facebookImage} alt="facebook icon" width={"30px"} height={"30px"} className="facebook__Icon" />
                    <p>Sign in with Facebook</p>
                </div>
            </div>

            

            <div className="middle__container">
            <div className="line11"></div>
            <div className="OrTag">OR</div>
            <div className="line11"></div>
            </div>
            
            <div className="email_acc" onClick={continueNext}>
            <p>Sign in with Email</p>
            </div>
                        
            <p className="login_option2">Don't have an account? <span className="login_Btba" onClick={()=>navigate("/user/signup/with_diffrent/account")}>Sign up</span></p>
        </div>
    </div>
    )
}

export default SigninBegains;