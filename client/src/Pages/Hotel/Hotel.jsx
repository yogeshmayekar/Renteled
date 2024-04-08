import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useFetch from '../../hooks/useFetch';
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Slider2 from '../../components/splider/Slider2';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import Details from '../../components/hotelbodyComp/Details';
import BookCard from '../../components/hotelbodyComp/BookCard';
import RightContainer from '../../components/rightContainer/RightContainer';
import RightContainer2 from '../../components/rightContainer/RightContainer2';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';


function Hotel(){
    const [openSafeyMeasure, setSefetyMeasure]= useState(false);
    const [openAllReviews, setOpenAllReviews]= useState(false);
    const [reviewData, setReviewData]= useState();
    const earlyLoaderData = useLoaderData();
    const params = useParams();
    const { location, checkin, checkout, id } = params;
    const hotelID = id.slice(22, 46);

    // console.log(earlyLoaderData.amenities)
    // const hotelID = id.slice(22, 46)
    // console.log("hotel id is",hotelID)
    useEffect(()=>{
        const getReview=async()=>{
            const res =await axios.get(`/review/find/${hotelID}`)
            if(res.status){
                console.log(res.data[0])
                setReviewData(res.data);
            }
        }
        getReview();
    },[hotelID])
    
    
    return(
        <div className='overlay-container'>
        <div className={openSafeyMeasure || openAllReviews ?"overlay32": ""}></div>
        <div className="content">
        <Navbar/>
        <Slider2 perPages={2} width={"100%"}/>
        <div style={{display:'flex'}}>
        <Details earlyLoaderData={earlyLoaderData} setOpenAllReviews={setOpenAllReviews} reviewData={reviewData} />
        <BookCard 
        setSefetyMeasure={setSefetyMeasure} 
        earlyLoaderData={earlyLoaderData} 
        checkIn={checkin} checkOut={checkout} 
        destination={location} 
        hotelID={hotelID} 
        hotelName={earlyLoaderData?.name}
        />
        </div>
        <MailList/>
        <Footer/>
        {openSafeyMeasure && <RightContainer setSefetyMeasure={setSefetyMeasure} />}
        {openAllReviews && <RightContainer2  setSefetyMeasure={setOpenAllReviews} reviewData={reviewData} />}
        </div>
        </div>
    )
}

export default Hotel;

export const handleEarlyHotelLoader = async({ params }) =>{
    // console.log(params.id);
    const id = params.id;
    const hotelID = id.slice(22, 46);
    const res = await axios.get(`/hotels/find/${hotelID}`);
    // console.log(res.status)
    if(res.status === !200){
        throw new Response('Not Found', {status: 404})
    }
    // console.log(res.data)
    return res.data
}
