import React from 'react';
import './pricewraper.css';

function PriceWrapper({smallvarient, data}) {

    // to calculate the discount percentage 
    // console.log(data.item.cheapestPrice)
    const markedPrice = Number(data.item.actualPrice);
    const discontedPrice = Number(data.item.cheapestPrice);

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
    
  return (
    <>
        <div className={smallvarient ? 'smallPriceWrapper' : 'priceWrapper'}>
            <span className='price'>{`₹${data.item.cheapestPrice}`}</span>
            <span className='markupPrice'><del>{`₹${data.item.actualPrice}`}</del></span>
            <span className='discontOffer'>{Number(percentageDiff.toFixed(0))}% off</span>
            <p className='taxAndFees'>+ taxes & fees: ₹{taxAmountCalculator(discontedPrice).toFixed(0)}</p>
        </div>
    </>
  )
}

export default PriceWrapper;