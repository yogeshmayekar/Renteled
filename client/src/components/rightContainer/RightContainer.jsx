import React from 'react';
import "./rightContainer.css";
import CloseIcon from '@mui/icons-material/Close';

function RightContainer({setSefetyMeasure}) {
  return (
    <div className='right__parent__container'>
    <div className='left__chields'>
    <CloseIcon onClick={()=>setSefetyMeasure(false)} className='closeRight' sx={{fontSize:'2.2rem', padding:"10px 5px", color:"#ffff", cursor:'pointer'}} />
    </div>
    <div className='right__Containers'>
    <div className='right_content'>
        <h3>Follow safety measures advised at the hotel</h3>
        <p>Dos</p>
        <ul>
            <li>Wear a mask and keep a safe distance of at least 2 metres (6 feet) when interacting with others.</li>
            <li>Wash your hands frequently with the soap and running water.</li>
            <li>Use the intercom to communicate with the property staff for your requirements.</li>
            <li>Put all disposable plates/cups/bottles after use in the garbage bag.</li>
            <li>In case a balcony is shared with another room, please be on the side of your room. Do not interact with guests of the other room.</li>
            <li>In case of a medical emergency, contact the reception immediately.</li>
            <li>In case of an emergency like fire/earthquake, please gather in the assembly area while maintaining 2 metres (6 feet) distance from others</li>
            <li>Request you to use your own mask and other safety kit, the spare one may not be available at reception.</li>
        </ul>

        <p>Don'ts</p>
        <ul>
            <li>Please do not touch anything outside your room, including sofa or chairs at the reception.</li>
            <li>Do not use common areas such as reception and minimise interaction with other guests.</li>
            <li>Visitors are not allowed in the property. Please use voice/video calls to interact with your dear ones.</li>
            <li>Spitting in the common area is strictly prohibited.</li>
            <li>Kitchen and washing area entry is prohibited for guests.</li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default RightContainer;