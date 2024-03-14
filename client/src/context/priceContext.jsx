import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    roomPrice: null,
    yourSaving: null,
    taxesAndFees: null,
    totalPrice: null,
    nightStay: null,
    finalSellingPrice: null,
    discountPercentage: null
};

export const PriceContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
      case "BOOKING_STAGE_ONE":
        return {
            roomPrice: action.payload.roomPrice,
            yourSaving: action.payload.yourSaving,
            taxesAndFees: action.payload.taxesAndFees,
            totalPrice: action.payload.totalPrice,
            nightStay: action.payload.nightStay,
            finalSellingPrice: action.payload.finalSellingPrice,
            discountPercentage: action.payload.discountPercentage,
        };
      default:
        return state;
    }
};



export const PriceContextProvider = ({ children }) => {
    const [state, dispatch55] = useReducer(AuthReducer, INITIAL_STATE);
    console.log(state)
      return (
        <PriceContext.Provider
          value={{
            roomPricez: state.roomPrice,
            yourSavingz: state.yourSaving,
            taxesAndFeesz: state.taxesAndFees,
            totalPricez: state.totalPrice,
            nightStayz: state.nightStay,
            finalSellingPricez:state.finalSellingPrice,
            discountPercentagez:state.discountPercentage,
            dispatch55,
          }}
        >
          {children}
        </PriceContext.Provider>
      );
  };