import './navbar.css'

function Navbar(){
    return(
        <>
        <div className="navbar">
        <div className="navContainer">
           <span className="logo">RENTELED</span> 
           <div className="items">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
           </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;