import React from 'react';
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Slider2 from '../../components/splider/Slider';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import Details from '../../components/hotelbodyComp/Details';
import BookCard from '../../components/hotelbodyComp/BookCard';

function Hotel(){
    return(
        <>
        <Navbar/>
        <Slider2/>
        <div style={{display:'flex'}}>
        <Details/>
        <BookCard/>
        </div>
        <MailList/>
        <Footer/>
        </>
    )
}

export default Hotel;