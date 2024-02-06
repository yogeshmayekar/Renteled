import { createContext, useState } from 'react';

export const ErrorContext = createContext();
const INITIAL_STATE = {
    errorMessage : "Something went wrond Please try after some time.",
};

export const ErrorContextProvider = ({ children }) => {
    const [state22, dispatch22] = useState(INITIAL_STATE);
    const [hasError, setHasError] = useState(false);

    return(
     <ErrorContext.Provider 
     value={{
        message: state22.errorMessage,
        hasError,
        setHasError,
        dispatch22
     }}
     >
        { children }
     </ErrorContext.Provider>   
    )
}