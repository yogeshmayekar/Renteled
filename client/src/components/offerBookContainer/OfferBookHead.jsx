import React from "react";
import { useNavigate } from 'react-router-dom';
import DiscountIcon from '@mui/icons-material/Discount';
import './offerHead.css';

const OfferBookHead = ()=>{
    const navigate = useNavigate()
    const submitLogin =(e)=>{
        navigate('/user/Sign-in')
        e.preventDefault()
    }
    return(
        <>
                <div className='offerHead'>
                        <div className='loginCon1'>
                            <div className='logoIcon'><DiscountIcon></DiscountIcon></div>
                            <div>LOGIN NOW TO GET UPTO 15% LOWER PRICES</div>
                        </div>

                        <div className='loginButtonCard'>
                            <button onClick={submitLogin}>Login</button>
                        </div>
                </div>
        </>
    )
}

export default OfferBookHead;