import React from 'react';
import './loader.css';
import CircularProgress from '@mui/material-next/CircularProgress';

const Loader = ()=>{
    return(
        <>
        <div className='LoaderComm'>
           <div className='centeredContent'>
                < CircularProgress color="primary" variant="indeterminate" sx={{ color: "blue" }} />
                <p>This may take a few seconds, do not close this page.</p>
            </div>
        </div>
        </>
    )
}

export default Loader;