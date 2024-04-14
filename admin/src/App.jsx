import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import AccountDetails, { earlyprofileLoader } from "./pages/AccountDetails/AccountDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"/account_details",
      element:<AccountDetails/>,
      loader:earlyprofileLoader,
    }

  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
