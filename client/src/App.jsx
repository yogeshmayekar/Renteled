import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import Register from './Pages/Register/Register';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import ProfileDetails from './Pages/ProfileDetails/ProfileDetails';


function App() {
    return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
            <Route path="/user/Sign-Up" element={<Register/>}/>
            <Route path="/user/Sign-in" element={<SignIn/>}/>
            <Route path="/user/admin-register" element={<AdminLogin/>} />
            <Route path="/user/accont-details" element={<ProfileDetails/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
