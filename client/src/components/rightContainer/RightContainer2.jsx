import React from 'react';
import "./rightContainer.css";
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function RightContainer2({setSefetyMeasure}) {
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
                 <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
            </div>
            <div>
                <span className='rating0f_five'>2.5 out of 5 Stars</span>
            </div>
            </div>
            <p className='ratingCount'>1,745 Ratings</p>   
        </div>

        <div className='review__message__container' style={{marginBottom:'20px'}}>
            <div className='reviewCon'>
            <Avatar alt="y" src="" sx={{width:'25px', height:'25px', marginRight:'10px'}} />
            <p className='name__of__review'>Rishabh Makkar</p>
            <p className='date__of__review'>Mar 06 2024</p>
            </div>
            <div className='reviewMessage'>
            <p>Nice property we had a comfortable and safe stay there. It’s clear and they keep care of hygiene also</p>
            </div>
        </div>
        <div className='review__message__container' style={{marginBottom:'20px'}}>
            <div className='reviewCon'>
            <Avatar alt="y" src="" sx={{width:'25px', height:'25px', marginRight:'10px'}} />
            <p className='name__of__review'>Rishabh Makkar</p>
            <p className='date__of__review'>Mar 06 2024</p>
            </div>
            <div className='reviewMessage'>
            <p>Nice property we had a comfortable and safe stay there. It’s clear and they keep care of hygiene also</p>
            </div>
        </div>
        <div className='review__message__container' style={{marginBottom:'20px'}}>
            <div className='reviewCon'>
            <Avatar alt="y" src="" sx={{width:'25px', height:'25px', marginRight:'10px'}} />
            <p className='name__of__review'>Rishabh Makkar</p>
            <p className='date__of__review'>Mar 06 2024</p>
            </div>
            <div className='reviewMessage'>
            <p>Nice property we had a comfortable and safe stay there. It’s clear and they keep care of hygiene also</p>
            </div>
        </div>
        <div className='review__message__container' style={{marginBottom:'20px'}}>
            <div className='reviewCon'>
            <Avatar alt="y" src="" sx={{width:'25px', height:'25px', marginRight:'10px'}} />
            <p className='name__of__review'>Rishabh Makkar</p>
            <p className='date__of__review'>Mar 06 2024</p>
            </div>
            <div className='reviewMessage'>
            <p>Nice property we had a comfortable and safe stay there. It’s clear and they keep care of hygiene also</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default RightContainer2;