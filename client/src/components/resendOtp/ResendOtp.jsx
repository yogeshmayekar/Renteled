import React, {useState, useEffect} from "react";
import './resendOtp.css';

const ResendOtp=({time=59})=>{
    const [counter, setCounter] = useState(time);
    useEffect(()=>{
        const timer = counter>0 && setInterval(()=>{
            setCounter(counter -1);
        }, 1000)
        return ()=>clearInterval(timer);
    },[counter]);

    const handleResendClick = () => {
        setCounter(time);
    };

    return(
        <>
            {counter < 1 ? (<div className='Resend__code' onClick={handleResendClick} >Resend Code</div>) :
                (<p className='timer_ptag'>Resend OTP in <span className='time__counter'>{counter} seconds </span> </p>) 
            }
        </>

    )
}

export default ResendOtp;