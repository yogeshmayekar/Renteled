import React from 'react';
import './reviewComponent.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function ReviewComponent({setOpenAllReviews}) {
  return (
    <div className='reviewContainer'>
        <h2>Ratings and reviews</h2>
        <div className='ratingContainer'>
            <div className='first_revire'>
            <div>
                <Stack spacing={1}>
                 <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
            </div>
            <div>
                <span className='rating0f_five'>2.5 out of 5 Stars</span>
            </div>
            </div>
            <p className='ratingCount'>1,745 Ratings</p>   
        </div>

        <div className='review__message__container'>
            <div className='reviewCon'>
            <Avatar alt="y" src="" sx={{width:'25px', height:'25px', marginRight:'10px'}} />
            <p className='name__of__review'>Rishabh Makkar</p>
            <p className='date__of__review'>Mar 06 2024</p>
            </div>
            <div className='reviewMessage'>
            <p>Nice property we had a comfortable and safe stay there. It’s clear and they keep care of hygiene also</p>
            </div>
        </div>

        <button onClick={()=>setOpenAllReviews(true)} >See all reviews</button>
        
    </div>
  )
}

export default ReviewComponent;