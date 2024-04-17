import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import Sidebar from "./components/Navbar/Sidebar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"/account_details",
      element:<AccountDetails/>,
    }

  ]);

  return (
    <>
    <Sidebar/>
     <RouterProvider router={router} />
    </>
  )
}

export default App
