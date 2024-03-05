import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useFetch from '../../hooks/useFetch';
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Slider2 from '../../components/splider/Slider2';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import Details from '../../components/hotelbodyComp/Details';
import BookCard from '../../components/hotelbodyComp/BookCard';
import RightContainer from '../../components/rightContainer/RightContainer';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';


function Hotel(){
    const [openSafeyMeasure, setSefetyMeasure]= useState(false);
    const earlyLoaderData = useLoaderData();
    // const hotelID = id.slice(22, 46)
    // console.log("hotel id is",hotelID)
    

    // const { data, loading, reFetch } = useFetch(
    //     `/hotels/find/${hotelID}`
    // );
    // console.log("Single hotel data is", data)
    return(
        <div className='overlay-container'>
        <div className={openSafeyMeasure?"overlay32": ""}></div>
        <div className="content">
        <Navbar/>
        <Slider2 perPages={2} width={"100%"}/>
        <div style={{display:'flex'}}>
        <Details earlyLoaderData={earlyLoaderData} />
        <BookCard setSefetyMeasure={setSefetyMeasure} />
        </div>
        <MailList/>
        <Footer/>
        {openSafeyMeasure && <RightContainer setSefetyMeasure={setSefetyMeasure} />}
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
