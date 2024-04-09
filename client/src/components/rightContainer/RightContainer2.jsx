import React from 'react';
import "./rightContainer.css";
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function RightContainer2({setSefetyMeasure, reviewData}) {
    const totalRatingSum =reviewData && reviewData.reduce((total, item)=>total + item.rating,0)
    const avgRating =reviewData && totalRatingSum/reviewData.length ;
  return (
    <div className='right__parent__container'>
    <div className='left__chields'>
    <CloseIcon onClick={()=>setSefetyMeasure(false)} className='closeRight' sx={{fontSize:'2.2rem', padding:"10px 5px", color:"#ffff", cursor:'pointer'}} />
    </div>
    <div className='right__Containers'>
    <div className='right_content2'>
    <h2>Ratings and reviews</h2>
        <div className='ratingContainer'>
            <div className='first_revire'>
            <div>
                <Stack spacing={1}>
                 {reviewData &&<Rating name="half-rating-read" defaultValue={avgRating.toFixed(1)} precision={0.5} readOnly />}
                </Stack>
            </div>
            <div>
                {reviewData &&<span className='rating0f_five'>{avgRating>0 ? avgRating.toFixed(1) : 0} out of 5 Stars</span>}
            </div>
            </div>
            {reviewData && <p className='ratingCount'>{reviewData.length} Ratings</p>}  
        </div>

        {reviewData && reviewData.map((data)=>(
            <div className='review__message__container' style={{marginBottom:'20px'}} key={data._id}>
            <div className='reviewCon'>
            <Avatar alt="y" src="" sx={{width:'25px', height:'25px', marginRight:'10px'}} />
            {data?.username &&<p className='name__of__review'>{data?.username}</p>}
            {data.createdAt && <p className='date__of__review'>{data?.createdAt.slice(0, 10)}</p>}
            </div>
            <div className='reviewMessage'>
            <p>{data.reviewMessage}</p>
            </div>
        </div>
        ))}

    </div>
    </div>
    </div>
  )
}

export default RightContainer2;