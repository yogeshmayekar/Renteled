import React, { useState } from 'react';
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Slider2 from '../../components/splider/Slider2';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import Details from '../../components/hotelbodyComp/Details';
import BookCard from '../../components/hotelbodyComp/BookCard';
import RightContainer from '../../components/rightContainer/RightContainer';

function Hotel(){
    const [openSafeyMeasure, setSefetyMeasure]= useState(false);
    return(
        <div className='overlay-container'>
        <div className={openSafeyMeasure?"overlay32": ""}></div>
        <div className="content">
        <Navbar/>
        <Slider2 perPages={2} width={"100%"}/>
        <div style={{display:'flex'}}>
        <Details/>
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