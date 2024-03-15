import { createContext, useReducer } from "react";

const hotelInfoJSON = localStorage.getItem('hotelInfo');

if(hotelInfoJSON){
  const hotelInfo = JSON.parse(hotelInfoJSON);
  var {discountPercentage,finalSellingPrice,nightStay,roomPrice,taxesAndFees,totalPrice,yourSaving} = hotelInfo
}

const INITIAL_STATE = {
    roomPrice:roomPrice || null,
    yourSaving:yourSaving || null,
    taxesAndFees:taxesAndFees || null,
    totalPrice:totalPrice || null,
    nightStay:nightStay || null,
    finalSellingPrice:finalSellingPrice || null,
    discountPercentage:discountPercentage || null
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
    // console.log(state)/
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