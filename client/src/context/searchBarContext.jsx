import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  destination: "",
  dates: [{
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    key: 'selection'
  }
],
  options: {
    "Room 1": 1, 
  },
};

export const SearchBarContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
      case "NEW_SEARCH":
        return {
          destination:action.payload.destination1,
          dates: action.payload.dates1,
          options: action.payload.options1
        }
      case "NEW_UPDATE_SEARCH":
        return {
          destination:action.payload.destination2,
          dates: action.payload.dates2,
          options: action.payload.options2 
        }
      case "NEW_UPDATE_SEARCH_OPTIONS":
        return {
          options: action.payload.options2,
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