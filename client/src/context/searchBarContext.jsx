import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchBarContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
      case "NEW_SEARCH":
        return action.payload;
      case "RESET_SEARCH":
        return INITIAL_STATE;
      default:
        return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  
    return (
      <SearchBarContext.Provider
        value={{
          city: state.city,
          dates: state.dates,
          options: state.options,
          dispatch,
        }}
      >
        {children}
      </SearchBarContext.Provider>
    );
};