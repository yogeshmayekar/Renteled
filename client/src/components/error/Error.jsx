import React, {useContext} from "react";
import './error.css';
import ErrorIcon from '@mui/icons-material/Error';
import { ErrorContext } from '../../context/errorContext';

const Error =()=>{
    const { setHasError, message } = useContext(ErrorContext);
    // console.log(message);
    const handleSubmit =(e)=>{
        setHasError(false);
        e.preventDefault();
    }
    return(
        <>
        <div className='error__Comm'>
           <div className='centeredContent2'>
                <ErrorIcon sx={{color:"#F65656", fontSize:"50px"}} />
                <h3>Oh snap!</h3>
                <p>{message}</p>
                <button onClick={handleSubmit} >Dismiss</button>
            </div>
        </div>
        </>
    )
}

export default Error;