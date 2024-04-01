import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchContextProvider } from './context/searchBarContext.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import { ErrorContextProvider } from './context/errorContext.jsx';
import { RegisterContextProvider } from './context/registerContext.jsx';
import { PriceContextProvider } from './context/priceContext.jsx';
import { TokenContextProvider } from './context/tokenContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <ErrorContextProvider>
          <RegisterContextProvider>
            <PriceContextProvider>
              <TokenContextProvider>
                <App />
              </TokenContextProvider>
            </PriceContextProvider>
          </RegisterContextProvider>
        </ErrorContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
