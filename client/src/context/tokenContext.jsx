import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    expiryDate:localStorage.getItem("expiryDate") || null,
};

export const TokenContext = createContext(INITIAL_STATE);

const TokenReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
            expiryDate: action.payload,
        };
      case "LOGOUT":
        return {
            expiryDate: null && localStorage.removeItem("user"),
        };
      default:
        return state;
    }
};

export const TokenContextProvider = ({ children }) => {
    const [state, dispatch66] = useReducer(TokenReducer, INITIAL_STATE);
      console.log(state)
  
    return (
      <TokenContext.Provider
        value={{
            expiryDate:state.expiryDate,
            dispatch66,
        }}
      >
        {children}
      </TokenContext.Provider>
    );
};
  