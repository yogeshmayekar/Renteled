import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertylist/PropertyList';
import Featured from '../../components/featured/Featured';
import ReviewList from '../../components/reviewList/ReviewList';
import './home.css';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import LeadingHotels from '../../components/LeadingHotel/LeadingHotel';

function Home(){
    return(
        <>
        <Navbar/>
        <Header/>
        <div className="containerHome">
        <Featured/>
        <h1 className="homeTitle">Browse by property Stype</h1>
        <PropertyList/>
        <h1 className="reviewTitle">Hotel reviews</h1>
        <ReviewList/>
        <LeadingHotels/>
        <MailList/>
        <Footer/>
        </div>
        </>
    )
}

export default Home;