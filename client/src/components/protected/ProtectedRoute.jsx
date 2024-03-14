import React from 'react';
import { Navigate } from 'react-router-dom';


function ProtectedRoute({Component}) {
    const user = localStorage.getItem('user');
  
    return(
        user ? (
          <Component/>
        ) : (
            <Navigate to="/user/signin/with_diffrent/account" />
        )
      )
}

export default ProtectedRoute