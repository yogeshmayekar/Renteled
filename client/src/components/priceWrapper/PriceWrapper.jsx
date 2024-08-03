import React from 'react';
import './pricewraper.css';

function PriceWrapper({smallvarient, data}) {
    const getLowestPriceDetails = (rooms) => {
        if (rooms.length === 0) return { roomType: null, actualPrice: null }; // Handle empty array
        
        // Find the room with the lowest actualPrice
        const lowestPriceRoom = rooms.reduce((minRoom, currentRoom) => {
          return currentRoom.cheapestPrice < minRoom.cheapestPrice ? currentRoom : minRoom;
        });
      
        return lowestPriceRoom
    };

    // to calculate the discount percentage 
    // console.log(data.rooms)
    const markedPrice = Number(getLowestPriceDetails(data?.rooms).actualPrice);
    const discontedPrice = Number(getLowestPriceDetails(data?.rooms).cheapestPrice);

    const percentageDiff = ((markedPrice - discontedPrice) / markedPrice) * 100;

    
    //to calculate the GST
    const taxAmountCalculator = (discontedPrice)=>{
        if(discontedPrice < 2500 ){
            // console.log("12%")
            return discontedPrice * 0.12
        }else if( discontedPrice <= 5000){
            // console.log("18%")
            return discontedPrice * 0.18
        }else{
            // console.log("28%")
            return discontedPrice * 0.28
        }
    }


    //   console.log(getLowestPriceDetails(data?.rooms))
    
  return (
    <>
        <div className={smallvarient ? 'smallPriceWrapper' : 'priceWrapper'}>
            <span className='price'>{`₹${getLowestPriceDetails(data?.rooms)?.cheapestPrice}`}</span>
            <span className='markupPrice'><del>{`₹${getLowestPriceDetails(data?.rooms).actualPrice}`}</del></span>
            <span className='discontOffer'>{Number(percentageDiff.toFixed(0))}% off</span>
            <p className='taxAndFees'>+ taxes & fees: ₹{taxAmountCalculator(discontedPrice).toFixed(0)}</p>
        </div>
    </>
  )
}

export default PriceWrapper;