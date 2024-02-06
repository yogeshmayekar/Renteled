import React, { useState, useContext, useRef, useEffect } from 'react';
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

const ProfileDetails= ()=>{
    const[editProfile, setEditProfile]= useState(false);
    const[editPassword, setEditPassword]= useState(false);
    const[phoneNumber, setPhoneNumber]= useState("")
    const[getOtp, setGetOtp]= useState(false);
    const[otp, setOtp]= useState(new Array(5).fill(""));
    const[isForgotPassword, setIsForgotPassword]= useState(false);
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const { dispatch } = useContext(AuthContext);

    useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus(); 
        }
    },[])

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
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert('invalid phone number');
            return;
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

    const handleverifyOtpChnage=(index, e)=>{
        const value = e.target.value;
        if(isNaN(value)) return;
        
        const newOtp=[...otp];
        newOtp[index] = value.substring(value.length -1);

        setOtp(newOtp);

        // triger function automatically when we enters otp
        const combinedOtp = newOtp.join("");
        console.log(combinedOtp.length)
        if(combinedOtp.length===5){
            handleVerifyOtp(combinedOtp);
        
        }

        //move to upcomming field if current inpu is field
         
        if(value && index < 5-1 && inputRef.current[index+1] ){
            inputRef.current[index+1].focus();
        }
    }

    const handleVerifyOtp=(otp4)=>{
        
        console.log('otp is ',otp4)
    }

    const handleKeyDown = (index, e)=>{
        if(e.key==='Backspace' && !otp[index] && index>0 && inputRef.current[index-1] ){
            inputRef.current[index-1].focus();
        }
    }

    const handleLogOut=(e)=>{
        dispatch({type: "LOGOUT"});
        localStorage.clear();
        navigate("/");
        e.preventDefault();
    }


    return(
        <>
            <Navbar/>
            <div className="name__container">
            <div style={{display:'flex', justifyContent:'space-between',alignItems:'center' }}>
            <div style={{display:'flex', marginTop:"20px"} }>
            <KeyboardBackspaceIcon className="back__icon" style={{fontSize:"40px"}} onClick={() => navigate(-1)} />
            <h2 className="user__name" >Hi, Yogesh</h2>
            </div>
            <button className="logout__button" onClick={handleLogOut} >Log out</button>
            </div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin:"auto"}} >
                <Grid item xs={6} sx={{marginTop:"1px"}}>
                    <div className='leftContainer'>
                    <h2>Edit Profile  <span className='edit2' ><TiPencil onClick={handleEditButton} /></span></h2>
                    <div className="chield__container" >
                    <div className="chield__Edit" >
                        <label>Full Name</label>
                        {editProfile ? <p><TextField hiddenLabel id="filled-hidden-label-small" defaultValue="Yogesh Mayekar"  size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p> : <p>Yogesh Mayekar</p>}
                    </div>
                    <div className="chield__Edit" >
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
                        
                        {getOtp && <>
                        <div style={{display:'flex', alignItems:'center', gap:'15px'}} >
                        <p>{otp.map((value, index)=>{
                         return <input key={index} 
                                id="filled-hidden" 
                                type='text' 
                                value={value} 
                                onClick={()=>handleVerifyOtp(index)} 
                                onChange={(e)=>handleverifyOtpChnage(index, e)} 
                                onKeyDown={(e)=>handleKeyDown(index, e)} 
                                ref={(input)=>(inputRef.current[index]=input)}
                                className='otp_input'
                                />
                        })
                        }</p>
                        <button className='verifyOtp_btn'>Verify</button>
                        </div>
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
                            <p><TextField hiddenLabel id="current__password" defaultValue="" size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p> 
                            <label>New Password</label>
                            <p><TextField hiddenLabel id="new__password" defaultValue="" type='password'  size="small" sx={{height:'20px', width:'280px', mb:1, outline:'none' }} /></p>
                            <div className='password__cri'>Password should have atleast 6 characters.</div>
                            <button className="updatePassword__button" >Update</button> 
                            </div>
                            <div className='Resend__code' >Resend Code</div>
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