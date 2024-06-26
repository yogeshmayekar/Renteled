import React, { useState, useContext, useEffect} from 'react';
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
import { TokenContext } from '../../context/tokenContext';
import OtpInput from '../../components/otpInput/OtpInput';
import ResendOtp from '../../components/resendOtp/ResendOtp';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import BookingHistory from '../../components/bookingHistory/BookingHistory';

const ProfileDetails= ()=>{
    const[editProfile, setEditProfile]= useState(false);
    const[isOverlay, setIsOverlay]= useState(false);
    const[editPassword, setEditPassword]= useState(false);
    const[updateOneDisable, setUpdateOneDisable]=useState(true);
    const[getOtpDisable, setGetOtpDisable]=useState(false);
    const[phoneNumber, setPhoneNumber]= useState("");
    const[numberErrorMessage, setNumberErrorMessage]=useState("")
    const[getOtp, setGetOtp]= useState(false);
    const[userName, setUserName]=useState("");
    const[userEmail, setUserEmail]=useState("");
    const[isForgotPassword, setIsForgotPassword]= useState(false);
    const[otpVerifyMessage, setOtpVerifyMessage]= useState("");
    const[secondOtpVerifyMessage, setSecondOtpVerifyMessage]= useState("");
    const[isOtpVerfied, setIsOtpVerified]= useState(false);
    const[isSecondOtpVerified, setIsSecondOtpVerified]= useState(false);
    const[currentPass, setCurrentPass]=useState();
    const[updatePassErrorMsg, setUpdatePassErrorMsg]=useState("")
    const[newPass, setNewPass]=useState();
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const{ dispatch66 } = useContext(TokenContext);
    const loaderUserData = useLoaderData();

    // console.log(loaderUserData)

    const handleEditButton =(e)=>{
        setEditProfile(!editProfile);
        e.preventDefault();
    }

    useEffect(()=>{
        setUserName(loaderUserData.username);
        setUserEmail(loaderUserData.email);
        setPhoneNumber(loaderUserData.phoneNumber);
    },[loaderUserData])

    useEffect(()=>{
        if(phoneNumber){
            if(phoneNumber.length<10 || phoneNumber.length >10){
                setGetOtp(false);
            }
        }
    },[phoneNumber]);

    const handlePhoneNumberChange=(e)=>{
        setPhoneNumber(e.target.value);
        setNumberErrorMessage("")
    }

    const handleGetOtp =async()=>{
        //phoneNumber Validation
        const regex = /[^0-9]/g;
        if(!getOtp){
            if(phoneNumber){
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
        }
        
        //call Api
        const res=await axios.post('http://localhost:9090/api/auth/get_otp',{
            email: loaderUserData.email,
            userName: loaderUserData.username,
            phoneNumber:phoneNumber,
        } , {credentials: "include"});
        // console.log(res)
        console.log("otp from server", res.data.otp);
        alert(res.data.message);
        setGetOtpDisable(true);

        setGetOtp(true);
    }

    const handleEditPassword=(e)=>{
        setEditPassword(!editPassword);
        e.preventDefault();
    }

    const handleForgotPassword=async(e)=>{
        setIsForgotPassword(true);
        const res=await axios.post('http://localhost:9090/api/auth/get_otp',{
            email: loaderUserData.email,
            userName: loaderUserData.username,
            phoneNumber:loaderUserData.phoneNumber,
        } , {credentials: "include"});
        // console.log(res)
        console.log("otp from server", res.data.otp);
        alert(res.data.message);
        e.preventDefault();
    }

    const onOtpSubmit =async (otp)=>{
        console.log("otp by client", otp);
        const res = await axios.post("http://localhost:9090/api/auth/verify-otp",{
            phoneNumber:phoneNumber,
            otp:otp,
        },{credentials: "include"})
        if(res.data.success){
            setIsOtpVerified(true);
            setGetOtp(false);
            setOtpVerifyMessage(res.data.message)
        }
        console.log(res.data);
        
    }

    const onforgotOtpSubmit=async(otp)=>{
        console.log("otp by c2", otp);
        const res = await axios.post("http://localhost:9090/api/auth/verify-otp",{
            phoneNumber:phoneNumber,
            otp:otp,
        },{credentials: "include"})
        if(res.data.success){
            setIsSecondOtpVerified(true);
            setSecondOtpVerifyMessage(res.data.message)
        }
        console.log(res.data);
    }

    const handleNameChange=(e)=>{
        setUserName(e.target.value);
        e.preventDefault();
    }

    const handleUpdateone=async(e)=>{
        // console.log("updated");
        if(isOtpVerfied){
            console.log(phoneNumber);
            const updateData = {
                username:userName,
                phoneNumber:phoneNumber
            }
            const res = await axios.put(`/users/${loaderUserData._id}`, updateData , {credentials: "include" })
            console.log(res);
            if(res.status === 200){
                window.location.reload();
            }
        }else{
            // console.log("up2")
            const res = await axios.put(`/users/${loaderUserData._id}`, {
                username:userName,
            }, {credentials: "include" })
            console.log(res);
            if(res.status === 200){
                window.location.reload();
            }
        }
        e.preventDefault();
    }

    

    const handleLogOut=async(e)=>{
        try{
            const res = await axios.post("/auth/logout");
            console.log(res.data.message);
            dispatch({type: "LOGOUT"});
            dispatch66({type:"LOGOUT"});
            Cookies.remove("access_token");
            localStorage.removeItem("user");
            navigate(-1);
            e.preventDefault();
        }catch(err){
            console.log(err);
        }
        
       
    }

    useEffect(()=>{
        if(phoneNumber === loaderUserData.phoneNumber){
            setGetOtpDisable(true);
            setUpdateOneDisable(true);
        }else{
            setGetOtpDisable(false); 
            setUpdateOneDisable(false);
        }

    },[phoneNumber])

    useEffect(()=>{
        if(userName===loaderUserData.username){
            setUpdateOneDisable(true);
        }else{
            setUpdateOneDisable(false);
        }
    },[userName])

    const handleCurrentPassword =(e)=>{
        setCurrentPass(e.target.value);
    }

    const handleNewPassword =(e)=>{
        setNewPass(e.target.value);
    }


    const handleUpdatePassword =async()=>{
        const res =await axios.post("/auth/update_password",{
                email:loaderUserData.email,
                password:currentPass,
                newPassword:newPass
        },{credentials: "include"})
        alert(res.data.message)
        if(res){
            setUpdatePassErrorMsg(res.data.message)
        }
    }

    const handleUnotherUpdatePassword = async()=>{
        const res =await axios.post("/auth/update_password_directly",{
            email:loaderUserData.email,
            newPassword:newPass
        },{credentials: "include"})
        alert(res.data.message)
        if(res){
        setUpdatePassErrorMsg(res.data.message)
        window.location.reload();
    }
    }

    


    return(
        <div className={isOverlay?'overlay31':''}>
            <Navbar/>
            <div className="name__container">
                <div style={{display:'flex', justifyContent:'space-between',alignItems:'center' }}>
                <div style={{display:'flex', marginTop:"20px"} }>
                    <KeyboardBackspaceIcon className="back__icon" style={{fontSize:"40px", paddingTop:"10px"}} onClick={() => navigate(-1)} />
                    <h2 className="user__name" >Hi, {loaderUserData.username}</h2>
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
                        {editProfile ? <p><TextField hiddenLabel id="filled-hidden-label-small" value={userName} onChange={handleNameChange}  size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p> :
                        <p>{userName}</p>}
                    </div>
                    <div className="chield__Edit">
                        <label>Email Address</label>
                        <p>{userEmail}</p>
                    </div>
                    <div className="chield__Edit" >
                        <label>Phone Number</label>
                        {!editProfile &&<p>{phoneNumber}</p>}
                        {editProfile && <>
                        <div style={{display:'flex', alignItems:'center', gap:'15px', paddingLeft:'5px' }} >
                        <p><TextField hiddenLabel id="filled-hidden-label" type='text' value={phoneNumber} onChange={handlePhoneNumberChange} defaultValue=""  size="small" sx={{height:'20px', width:'280px', mb:2}} /></p>
                        <button className='getotp_btn' onClick={handleGetOtp} disabled={getOtpDisable} >Get OTP</button>
                        </div>
                        {numberErrorMessage && <div className='password__cri'>{numberErrorMessage}</div>}
                        {isOtpVerfied && <p style={{margin:'0'}} >{otpVerifyMessage}</p>}
                        {getOtp && <>
                        <div style={{display:'flex', alignItems:'center', gap:'15px'}} >
                        <OtpInput length={5} onOtpSubmit={onOtpSubmit} />
                        <button className='verifyOtp_btn' onClick={onOtpSubmit} >Verify OTP</button>
                        </div>
                        <ResendOtp time={30} handleGetOtp={handleGetOtp} />
                        <div className='otp_message' >We have sent a OTP to your email. You can enter the OTP above to get verify</div>
                        </>}
                        </> 
                        }
                        
                    </div>
                    </div> 
                    {editProfile && <button className="update__button" disabled={updateOneDisable} onClick={handleUpdateone} >Update</button> }
                    </div>
                    
                </Grid>
                <Grid item xs={6} sx={{marginTop:"1px"}}>
                    <div className='rightContainer'>
                    <h2>Change Password <span className='edit2'><TiPencil onClick={handleEditPassword} /></span></h2>
                    <div className="chield__container">
                     <div className="chield__Edit">
                        {isForgotPassword ? <>
                            <div className="chield__Edit">
                            {!isSecondOtpVerified &&<>
                                <label>Enter OTP</label>
                            <div style={{display:'flex', alignItems:'center', gap:'15px'}} >
                                <OtpInput length={5} onOtpSubmit={onforgotOtpSubmit} />
                                <button className='verifyOtp_btn' >Verify OTP</button>
                            </div>
                            </>}
                            {isSecondOtpVerified && <p style={{margin:'0 6px'}} >{secondOtpVerifyMessage}</p>}
                            <label>New Password</label>
                            <p><TextField hiddenLabel id="new__password"  type='password' value={newPass} onChange={handleNewPassword}  size="small" sx={{height:'20px', width:'280px', mb:1, outline:'none' }} /></p>
                            <div className='password__cri'>Password should have atleast 6 characters.</div>
                            <div className='password__cri'>{updatePassErrorMsg}</div>
                            <button className="updatePassword__button" onClick={handleUnotherUpdatePassword} >Update</button> 
                            </div>
                            {!isSecondOtpVerified &&
                            <>
                            <ResendOtp time={59} />
                            <div className='otp_message' >We have sent a one time password (OTP) to <strong>{loaderUserData.email}</strong>. You can enter the OTP above to set your new password.</div>
                            </>
                            }
                        </>  :
                        <>
                        {editPassword ? <>
                            <label>Current Password</label>
                            <p><TextField hiddenLabel id="current__password" type='password' value={currentPass} onChange={handleCurrentPassword}  size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p> 
                            <div className="chield__Edit">
                            <label>New Password</label>
                            <p><TextField hiddenLabel id="new__password" type='password' value={newPass} onChange={handleNewPassword} size="small" sx={{height:'20px', width:'280px', mb:1, outline:'none' }} /></p>
                            <div className='password__cri'>Password should have atleast 6 characters.</div>
                            <button className="updatePassword__button" onClick={handleUpdatePassword} >Update</button> 
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
            <BookingHistory userId={loaderUserData._id} setIsOverlay={setIsOverlay} />
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}

export default ProfileDetails;

export const earlyprofileLoader=async({})=>{
    const localUser = localStorage.getItem('user');
    if(localUser){
        var userD = JSON.parse(localUser);
    }
    
    const res=await axios.get(`/users/${userD._id}`);
    // console.log(res.data);
    if(res.status === !200){
        throw new Response('Not Found', {status: 404});
    }
    return res.data
}