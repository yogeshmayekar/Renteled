import React, {useState, useEffect, useContext} from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertylist/PropertyList';
import Featured from '../../components/featured/Featured';
import ReviewList from '../../components/reviewList/ReviewList';
import './home.css';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import LeadingHotels from '../../components/LeadingHotel/LeadingHotel';
import banner from '../../Assets/banner22.avif';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';
import { ErrorContext } from '../../context/errorContext';

function Home(){
    const [isLoading, setLoading] = useState(true);
    const contextError = useContext(ErrorContext);
    // console.log(contextError);


    useEffect(()=>{
        if (contextError.hasError){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    },[contextError.hasError])

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1500)
    },[])
    return(
        isLoading ? ( <Loader/> ) :
        (<>
        {contextError.hasError ? <Error/> : null}
        <div className={`wrapper ${contextError.hasError ? 'disable__overlay' : ''}`}>
        <Navbar/>
        <Header/>
        <div className="containerHome">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="reviewTitle">Hotel reviews</h1>
        <ReviewList/>
        <div className="banner22" >
            < img src={banner} alt="" />
        </div>
        <LeadingHotels/>
        <MailList/>
        <Footer/>
        </div>
        </div>
        </>
        )
    )
}

export default Home;