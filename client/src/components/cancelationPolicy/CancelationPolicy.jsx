import React from 'react';
import './cancelationPolicy.css';

function CancelationPolicy() {
  return (
    <>
    <div className='cacelled_pp'>
        <h4>Cancelation Policy</h4>
        <ul>
            <li>For cancalation done prior 9 AM on bookind day, 100% Refundable</li>
            <li>For cancalation done post 9 AM on bookind day,Non Refundable</li>
        </ul>
    </div>
    </>
  )
}

export default CancelationPolicy;