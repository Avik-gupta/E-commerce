import React, { useEffect } from 'react'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import img1 from '../../ASSETS/About US/1.jpeg'
import img2 from '../../ASSETS/About US/2.jpeg'
import img3 from '../../ASSETS/About US/3.jpeg'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        
        <div className='pgleft pgcommon'>
            <img src={img1} alt='noimg' />

            <div>
                <h1>Gadget Galaxy is India's largest electronics retailer</h1>
                <p>Network of 400+ stores nationally, housing over 200 brands and 5000 products. From in-depth, expert buying advice to personal after-sales care tailored to each customer, we commit to our promise of 'Personalising Technology' every day.</p>

            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src={img2} alt='noimg' />

            <div>
                <h1>Wide Range. Best Brands</h1>
                <p>Our ever-expanding product range includes the latest releases from global brands in:

                Personal Devices: Mobile Phones, Tablets, and Laptops
                Entertainment Systems: TVs, Sound Systems, Home Assistants & Home Theatres
                Home Appliances: ACs, Refrigerators, Washing Machines, Cooktops, Dishwashers etc
                Cameras and Accessories: DSLR cameras and Accessories - all at affordable prices

                Our stores and website offer over 5000 products and more than 200 brands with year-round promotional offers and even No Cost EMI options. Our in-store sales team makes sure to understand every customer's personal needs and budgets while assisting them to make the best choice while buying their tech</p>

            </div>
        </div>
        <div className='pgleft pgcommon'>
            <img src={img3} alt='noimg' />

            <div>
                <h1>Best-in-class Shopping Experience</h1>
                <p>In our commitment to making technology readily accessible across the country, Reliance Digital offers a flexible shopping experience, seamlessly combining our online presence with our physical stores.
                 Customers shopping online at www.reliancedigital.in can choose to immediately pick up their order from their nearest store with our Pick Up at Store feature or choose Express Delivery, to receive their product within 48 hours.Customers can also choose from a variety of flexible payment options including debit and credit cards, cash-on-delivery, UPI, online wallets and EMI options</p>
            </div>
        </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About