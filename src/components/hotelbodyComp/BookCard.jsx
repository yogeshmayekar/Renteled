import React from 'react';
import './bookCard.css';
import OfferBookHead from '../offerBookContainer/OfferBookHead';

const BookCard = ()=>{
    return(
        <>
            <div className='bookCardContainer'>
                <div className='bookWrap'>
                    {/* offrt head  */}
                    <OfferBookHead/>

                    <div className='priceWrapper'>
                        <span className='price'>₹1122</span>
                        <span className='markupPrice'>₹4717</span>
                        <span className='discontOffer'>76% off</span>
                        <p className='taxAndFees'>+ taxes & fees: ₹178</p>
                    </div>

                    <div className='roomDetails'>
                        <div className='dateDetails'>dates goes here</div>
                        <div className='middleLine'></div>
                        <div className='roomDetails'>room goes here</div>
                    </div>

                    <div className='dottedLines'></div>

                    
                </div>
            </div>
        
        </>
    )
}

export default BookCard;