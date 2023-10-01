import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertylist/propertyList';
import Featured from '../../components/featured/Featured';
import './home.css';

function Home(){
    return(
        <>
        <Navbar/>
        <Header/>
        <div className="containerHome">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        </div>
        </>
    )
}

export default Home;