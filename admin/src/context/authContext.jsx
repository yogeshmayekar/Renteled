import {createContext, useReducer, useEffect} from 'react';

export const AuthContext = createContext();

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
}

const AuthReducer =(state, action)=>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILED":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOG_OUT":
            return {
                user: null && localStorage.removeItem("user"),
                loading: false,
                error: null,
            };
        default:
            return state;
    }

}

export const AuthContextProvider = ({children})=>{
    const[state, dispatch]= useReducer(AuthReducer,INITIAL_STATE);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
      }, [state.user]);
 return(
    <AuthContext.Provider
    value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch,
        }}
    >
    {children}
    </AuthContext.Provider>
 )
}