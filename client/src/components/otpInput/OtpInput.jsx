import React,{useState, useRef, useEffect} from "react";
import './otpInput.css'

const OtpInput =({length=5, onOtpSubmit=()=>{}})=>{
    const[otp, setOtp]= useState(new Array(length).fill(""));
    const inputRef = useRef([]);

    useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus(); 
        }
    },[])

    const handleverifyOtpChnage=(index, e)=>{
        const value = e.target.value;
        if(isNaN(value)) return;
        
        const newOtp=[...otp];
        newOtp[index] = value.substring(value.length -1);

        setOtp(newOtp);

        // triger function automatically when we enters otp
        const combinedOtp = newOtp.join("");
        // console.log(combinedOtp.length)
        if(combinedOtp.length===length){
            console.log(combinedOtp)
        
        }

        //move to upcomming field if current inpu is field
         
        if(value && index < length-1 && inputRef.current[index+1] ){
            inputRef.current[index+1].focus();
        }
    }

    const handleVerifyOtp=(index)=>{
        inputRef && inputRef.current[index].setSelectionRange(1, 1)
        
    }

    const handleKeyDown = (index, e)=>{
        if(e.key==='Backspace' && !otp[index] && index>0 && inputRef.current[index-1] ){
            inputRef.current[index - 1].focus();
        }
    }
    
    return(
        <>
        <p className='otp__container'>{otp.map((value, index)=>{
            return <input key={index} 
                    id="filled-hidden" 
                    type='text' 
                    value={value}
                    ref={(input)=>(inputRef.current[index] = input)} 
                    onClick={()=>handleVerifyOtp(index)} 
                    onChange={(e)=>handleverifyOtpChnage(index, e)} 
                    onKeyDown={(e)=>handleKeyDown(index, e)}
                    className='otp_input'
                    />
            })}</p>
        </>
    )
}

export default OtpInput;