import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import Register from './Pages/Register/Register';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import ProfileDetails from './Pages/ProfileDetails/ProfileDetails';
import RegisterBegin from './Pages/Register/RegisterBegin';
import SignupBegains from './Pages/SignIn/SigninBegains';
import GuestPolicy from './Pages/GuestPolicy/GuestPolicy';


function App() {
    return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
            <Route path="/user/signup/with_diffrent/account" element={<RegisterBegin/>}/>
            <Route path="/user/signin/with_diffrent/account" element={<SignupBegains/>}/>
            <Route path="/user/Sign_Up" element={<Register/>}/>
            <Route path="/user/Sign_in" element={<SignIn/>}/>
            <Route path="/user/admin_register" element={<AdminLogin/>} />
            <Route path="/user/accont_details" element={<ProfileDetails/>} />
            <Route path="/guest-policy/" element={<GuestPolicy/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
