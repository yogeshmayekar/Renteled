import React from 'react';
import './profileDetails.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import Grid from '@mui/material/Grid';
import { TiPencil } from "react-icons/ti";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const ProfileDetails= ()=>{
    const navigate = useNavigate();

    return(
        <>
            <Navbar/>
            <div className="name__container">
            <div style={{display:'flex', marginTop:"20px"} }>
            <KeyboardBackspaceIcon className="back__icon" style={{fontSize:"40px"}} onClick={() => navigate(-1)} />
            <h2 className="user__name" >Hi, Yogesh</h2>
            </div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin:"auto"}} >
                <Grid item xs={6} sx={{marginTop:"1px"}}>
                    <div className='leftContainer'>
                    <h2>Edit Profile  <span className='edit2' ><TiPencil /></span></h2>
                    <div>
                        <label>Full Name</label>
                        <p>Yogesh Mayekar</p>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <p>7411805513</p>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <p>yogesh.mayekar09@gmail.com</p>
                    </div>
                    </div>
                    
                </Grid>
                <Grid item xs={6} sx={{marginTop:"1px"}}>
                    <div className='rightContainer'>
                    <h2>Change Password <span className='edit2'><TiPencil /></span></h2>
                    <div>
                        <label>Current Password</label>
                        <p>***********</p>
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