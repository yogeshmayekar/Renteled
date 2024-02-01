import React from 'react';
import './profileDetails.css';
import Navbar from '../../components/navbar/Navbar';
import Grid from '@mui/material/Grid';
import { TiPencil } from "react-icons/ti";

const ProfileDetails= ()=>{
    return(
        <>
            <Navbar/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin:"auto"}} >
                <Grid item xs={6} sx={{marginTop:"50px"}}>
                    <div className='leftContainer'>
                    <h2>Edit Profile <span className='edit1' ><TiPencil /></span></h2>
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
                <Grid item xs={6} sx={{marginTop:"50px"}}>
                    <div className='rightContainer'>
                    <h2>Change Password <span className='edit2'><TiPencil /></span></h2>
                    <div>
                        <label>Current Password</label>
                        <p>***********</p>
                    </div>
                    </div>
                
                </Grid>
            </Grid>
        </>
    )
}

export default ProfileDetails;