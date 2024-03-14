import React, { useState, useContext} from 'react';
import './profileDetails.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { TiPencil } from "react-icons/ti";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import OtpInput from '../../components/otpInput/OtpInput';
import ResendOtp from '../../components/resendOtp/ResendOtp';
import Cookies from 'js-cookie';

const ProfileDetails= ()=>{
    const[editProfile, setEditProfile]= useState(false);
    const[editPassword, setEditPassword]= useState(false);
    const[phoneNumber, setPhoneNumber]= useState("");
    const[numberErrorMessage, setNumberErrorMessage]=useState("")
    const[getOtp, setGetOtp]= useState(false);
    const[isForgotPassword, setIsForgotPassword]= useState(false);
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);



    const handleEditButton =(e)=>{
        setEditProfile(!editProfile);
        e.preventDefault();
    }

    const handlePhoneNumberChange=(e)=>{
        setPhoneNumber(e.target.value);
    }

    const handleGetOtp =(e)=>{
        //phoneNumber Validation
        const regex = /[^0-9]/g;
        if(!getOtp){
            if(phoneNumber.length<10 ){
                setNumberErrorMessage('Phone number must contains 10 digits.');
                return;
            }else if(regex.test(phoneNumber)){
                setNumberErrorMessage('Invalid phone number.');
                return;
            }else if(phoneNumber.length>10 ){
                setNumberErrorMessage('Phone number canot be more than 10 digits.');
                return;
            }
        }
        

        //call Api 

        setGetOtp(true);
        e.preventDefault();
    }

    const handleEditPassword=(e)=>{
        setEditPassword(!editPassword);
        e.preventDefault();
    }

    const handleForgotPassword=(e)=>{
        setIsForgotPassword(true);
        e.preventDefault();
    }

    const onOtpSubmit = (otp)=>{
        console.log(otp);
    }

    const onforgotOtpSubmit=(otp)=>{
        console.log(otp);
    }


    

    const handleLogOut=(e)=>{
        dispatch({type: "LOGOUT"});
        Cookies.remove("access_token");
        localStorage.removeItem("user");
        navigate("/");
        e.preventDefault();
    }


    return(
        <>
            <Navbar/>
            <div className="name__container">
            <div style={{display:'flex', justifyContent:'space-between',alignItems:'center' }}>
            <div style={{display:'flex', marginTop:"20px"} }>
            <KeyboardBackspaceIcon className="back__icon" style={{fontSize:"40px", paddingTop:"10px"}} onClick={() => navigate(-1)} />
            <h2 className="user__name" >Hi, Yogesh</h2>
            </div>
            <button className="logout__button" onClick={handleLogOut} >Log out</button>
            </div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin:"auto"}} >
                <Grid item xs={6} sx={{marginTop:"1px"}}>
                    <div className='leftContainer'>
                    <h2>Edit Profile  <span className='edit2' ><TiPencil onClick={handleEditButton} /></span></h2>
                    <div className="chield__container">
                    <div className="chield__Edit">
                        <label>Full Name</label>
                        {editProfile ? <p><TextField hiddenLabel id="filled-hidden-label-small" defaultValue="Yogesh Mayekar"  size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p> : <p>Yogesh Mayekar</p>}
                    </div>
                    <div className="chield__Edit">
                        <label>Email Address</label>
                        <p>yogesh.mayekar09@gmail.com</p>
                    </div>
                    <div className="chield__Edit" >
                        <label>Phone Number</label>
                        {editProfile && <>
                        <div style={{display:'flex', alignItems:'center', gap:'15px', paddingLeft:'5px' }} >
                        <p><TextField hiddenLabel id="filled-hidden-label" type='text' value={phoneNumber} onChange={handlePhoneNumberChange} defaultValue=""  size="small" sx={{height:'20px', width:'280px', mb:2}} /></p>
                        <button className='getotp_btn'onClick={handleGetOtp} >Get OTP</button>
                        </div>
                        {numberErrorMessage && <div className='password__cri'>{numberErrorMessage}</div>}
                        {getOtp && <>
                        <div style={{display:'flex', alignItems:'center', gap:'15px'}} >
                        <OtpInput length={5} onOtpSubmit={onOtpSubmit} />
                        <button className='verifyOtp_btn' >Verify OTP</button>
                        </div>
                        <ResendOtp time={30} />
                        <div className='otp_message' >We have sent a OTP to your phone. You can enter the OTP above to get verify</div>
                        </>}
                        </> 
                        }
                        
                    </div>
                    </div> 
                    {editProfile && <button className="update__button" >Update</button> }
                    </div>
                    
                </Grid>
                <Grid item xs={6} sx={{marginTop:"1px"}}>
                    <div className='rightContainer'>
                    <h2>Change Password <span className='edit2'><TiPencil onClick={handleEditPassword} /></span></h2>
                    <div className="chield__container">
                     <div className="chield__Edit">
                        {isForgotPassword ? <>
                            <div className="chield__Edit">
                            <label>Enter OTP</label>
                            <div style={{display:'flex', alignItems:'center', gap:'15px'}} >
                                <OtpInput length={5} onOtpSubmit={onforgotOtpSubmit} />
                                <button className='verifyOtp_btn' >Verify OTP</button>
                            </div>
                            <label>New Password</label>
                            <p><TextField hiddenLabel id="new__password" defaultValue="" type='password'  size="small" sx={{height:'20px', width:'280px', mb:1, outline:'none' }} /></p>
                            <div className='password__cri'>Password should have atleast 6 characters.</div>
                            <button className="updatePassword__button" >Update</button> 
                            </div>
                            <ResendOtp time={59} />
                            <div className='otp_message' >We have sent a one time password (OTP) to <strong>yogesh.mayekar09@gmail.com</strong>. You can enter the OTP above to set your new password.</div>
                        </>  :
                        <>
                        {editPassword ? <>
                            <label>Current Password</label>
                            <p><TextField hiddenLabel id="current__password" type='password' defaultValue=""  size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p> 
                            <div className="chield__Edit">
                            <label>New Password</label>
                            <p><TextField hiddenLabel id="new__password" type='password' defaultValue=""  size="small" sx={{height:'20px', width:'280px', mb:1, outline:'none' }} /></p>
                            <div className='password__cri'>Password should have atleast 6 characters.</div>
                            <button className="updatePassword__button" >Update</button> 
                            </div>
                            <div className='forgot__password' onClick={handleForgotPassword} >Forgot password?</div>
                            </> : <>
                            <label>Current Password</label>
                            <p className='doted__password'>&#x2022;&nbsp;&#x2022;&nbsp;&#x2022;&nbsp;&#x2022;&nbsp;&#x2022;&nbsp;&#x2022;&nbsp;&#x2022;&nbsp;&#x2022;</p>
                            </>
                        } </>
                        }
                    </div>
                    </div>
                    </div>
                
                </Grid>
            </Grid>
            </div>
            <MailList/>
            <Footer/>
        </>
    )
}

export default ProfileDetails;