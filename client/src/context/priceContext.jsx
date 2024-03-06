import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    yourSaving: null,
    taxesAndFees: null,
    totalPrice: null,
};

export const PriceContext = createContext(INITIAL_STATE);



const AuthReducer = (state, action) => {
    switch (action.type) {
      case "BOOKING_STAGE_ONE":
        return {
            yourSaving: action.payload.yourSaving,
            taxesAndFees: action.payload.taxesAndFees,
            totalPrice: action.payload.totalPrice,
        };
      default:
        return state;
    }
};



export const PriceContextProvider = ({ children }) => {
    const [state, dispatch55] = useReducer(AuthReducer, INITIAL_STATE);

      return (
        <PriceContext.Provider
          value={{
            yourSaving: state.yourSaving,
            taxesAndFees: state.taxesAndFees,
            totalPrice: state.totalPrice,
            dispatch55,
          }}
        >
          {children}
        </PriceContext.Provider>
      );
  };