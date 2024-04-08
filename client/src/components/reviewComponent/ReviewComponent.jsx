import React, { useEffect, useState } from 'react';
import './reviewComponent.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function ReviewComponent({setOpenAllReviews, reviewData}) {
    const totalRatingSum =reviewData && reviewData.reduce((total, item)=>total + item.rating,0)
    const avgRating =reviewData && totalRatingSum/reviewData.length ;

  return (
    <div className='reviewContainer'>
        <h2>Ratings and reviews</h2>
        <div className='ratingContainer'>
            <div className='first_revire'>
            <div>
                <Stack spacing={1}>
                 {reviewData && <Rating name="half-rating-read" defaultValue={avgRating.toFixed(1)} precision={0.5} readOnly />}
                </Stack>
            </div>
            <div>
                {reviewData &&<span className='rating0f_five'>{avgRating.toFixed(1)} out of 5 Stars</span>}
            </div>
            </div>
            {reviewData &&<p className='ratingCount'>{reviewData.length} Ratings</p>}
        </div>

        {reviewData && (
            <div className='review__message__container'>
            <div className='reviewCon'>
            <Avatar alt="y" src="" sx={{width:'25px', height:'25px', marginRight:'10px'}} />
            <p className='name__of__review'>{reviewData[0].username}</p>
            {reviewData[0].createdAt && <p className='date__of__review'>{reviewData[0].createdAt.slice(0, 10)}</p>}
            </div>
            <div className='reviewMessage'>
            <p>{reviewData[0].reviewMessage}</p>
            </div>
        </div>
        )}

        <button onClick={()=>setOpenAllReviews(true)} >See all reviews</button>
        
    </div>
  )
}

export default ReviewComponent;