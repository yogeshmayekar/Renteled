import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import './header.css'

function Header(){
    return(
        <>
        <div className="header">
            <div className="headerContainer">
             <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
                </div>
             </div>
             <h1 className="headerTitle">Looking for a discounts? Get it now</h1>
             <p className="headerDesc">Get rewared for  your travel - unlock instant savings of 10% or mkre with a free Renteled account</p>
             <button className="headerBtn">Sign in / Register</button>
            </div>
        </div>
        </>
    )
}

export default Header;