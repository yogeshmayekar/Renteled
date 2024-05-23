import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";
import Booking from "./pages/Bookings/Booking";
import Property from "./pages/Properties/Property";
import Reviews from "./pages/Reviews/Reviews";
import Messages from "./pages/Messages/Messages";
import Users from "./pages/Users/Users";
import LoginPage from './pages/Login/LoginPage.jsx';
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/SignUp/SignupPage";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/account_details",
      element:<ProfileDetails/>,
    },
    {
      path:"/bookings",
      element:<Booking/>,
    },
    {
      path:"/properties",
      element:<Property/>,
    },
    {
      path:"/reviews",
      element:<Reviews/>,
    },
    {
      path:"/messages",
      element:<Messages/>,
    },
    {
      path:"/users",
      element:<Users/>,
    }

  ]);

  return (
    <div className="flex mx-auto">
     <RouterProvider router={router} />
    </div>
  )
}

export default App
