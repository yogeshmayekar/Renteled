import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    loading: false,
    error: "",
};

export const RegisterContext = createContext(INITIAL_STATE);

const RegisterReducer = (state, action) => {
    switch (action.type) {
      case "REGISTER_START":
        return {
          loading: true,
          error: null,
        };
      case "REGISTER_SUCCESS":
        return {
          loading: false,
          error: null,
        };
      case "REGISTER_FAILURE":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
};

export const RegisterContextProvider = ({ children }) => {
    const [state, dispatch33] = useReducer(RegisterReducer, INITIAL_STATE);
    
    
    return (
      <RegisterContext.Provider
        value={{
          loading: state.loading,
          error: state.error,
          dispatch33,
        }}
      >
        {children}
      </RegisterContext.Provider>
    );
};
  