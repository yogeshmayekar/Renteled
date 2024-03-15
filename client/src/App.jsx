// import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import List from './Pages/List/List';
import Hotel, { handleEarlyHotelLoader } from './Pages/Hotel/Hotel';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import Register from './Pages/Register/Register';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import ProfileDetails, {earlyprofileLoader} from './Pages/ProfileDetails/ProfileDetails';
import RegisterBegin from './Pages/Register/RegisterBegin';
import SignupBegains from './Pages/SignIn/SigninBegains';
import GuestPolicy from './Pages/GuestPolicy/GuestPolicy';
import ContinueToBook, {handleContinueToBookLoader} from './Pages/Hotel/ContinueToBook';
// import PageNotFound from './components/pageNotFound/PageNotFound';
import HotelNotFound from './components/pageNotFound/HotelNotFound';

const router = createBrowserRouter([
    {
    path : "/",
    element: <Home/>,
    },
    {
    path : "/hotels/:location/:checkin/:checkout",
    element: <List/>
    },
    {
    path : "/918357/:checkin/:checkout/:roomCount/:guestCount/:id",
    element: <ContinueToBook/>,
    loader: handleContinueToBookLoader,
    },
    {
    path : "/hotels/:id/:location/:checkin/:checkout",
    element: <Hotel/>,
    loader: handleEarlyHotelLoader,
    errorElement: <HotelNotFound/>
    },
    {
    path : "/user/signup/with_diffrent/account",
    element: <RegisterBegin/>
    },
    {
    path : "/user/signin/with_diffrent/account",
    element: <SignupBegains/>
    },
    {
    path : "/user/Sign_Up",
    element: <Register/>
    },
    {
    path : "/user/Sign_in",
    element: <SignIn/>
    },
    {
    path : "/user/admin_register",
    element: <AdminLogin/>
    },
    {
    path : "/user/accont_details",
    element: <ProfileDetails/>,
    loader: earlyprofileLoader,
    },
    {
    path : "/guest-policy/",
    element: <GuestPolicy/>
    },
    // {
    // path : "/*",
    // element: <Navigate to="/"/>,
    // },
])


function App() {
    return (
    <>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/hotels/:location/:checkin/:checkout" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
            <Route path="/user/signup/with_diffrent/account" element={<RegisterBegin/>}/>
            <Route path="/user/signin/with_diffrent/account" element={<SignupBegains/>}/>
            <Route path="/user/Sign_Up" element={<Register/>}/>
            <Route path="/user/Sign_in" element={<SignIn/>}/>
            <Route path="/user/admin_register" element={<AdminLogin/>} />
            <Route path="/user/accont_details" element={<ProfileDetails/>} />
            <Route path="/guest-policy/" element={<GuestPolicy/>} />
        </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
