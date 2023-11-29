import React from 'react'
import footer from '../../ASSETS/Footer1.jpeg'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={footer} alt='Not Available' />
            </div>
            <div className='right'>
                <h1>Bringing Tomorrow’s Technology Today!
                </h1>
                <p>We deliver Newly Launched Gadgets at your doorstep.
                    With Free Delivery And Installation
                </p>
            </div>
        </div>
    )
}

export default Footer1