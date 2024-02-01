import React from 'react';
import './loader.css';
import CircularProgress from '@mui/material-next/CircularProgress';

const Loader = ()=>{
    return(
        <>
        <div className='LoaderComm'>
           <CircularProgress color="primary" variant="indeterminate" sx={{color:"blue"}} /> 
        </div>
        </>
    )
}

export default Loader;