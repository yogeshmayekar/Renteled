import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  destination: "",
  dates: [{
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    key: 'selection'
  }
],
  options: {},
};

export const SearchBarContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
      case "NEW_SEARCH":
        return {
          destination:action.payload.destination,
          dates: action.payload.dates,
          options: action.payload.options 
        }
      case "NEW_UPDATE_SEARCH":
        return {
          destination:action.payload.destination2,
          dates: action.payload.dates2,
          // options: action.payload.options 
        }
      case "RESET_SEARCH":
        return INITIAL_STATE;
      default:
        return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch44] = useReducer(SearchReducer, INITIAL_STATE);
    console.log(state)
  
    return (
      <SearchBarContext.Provider
        value={{
          destination: state.destination,
          dates: state.dates,
          options: state.options,
          dispatch44,
        }}
      >
        {children}
      </SearchBarContext.Provider>
    );
};