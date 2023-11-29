import React from 'react'
// import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './ForgetPassword.css'
// import background from '../../ASSETS/2.jpg'

const Login = () => {
  return (
    <div className='loginpage'>
      
      <form action=""  className='form3'>
      <div className='homebtn'>
      <Link to='/'>
              <button className='home'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
               Home
              </button>
      </Link>
      </div>
     
    <div className="formji2">
      <div className="form-value">
        <h3>Forget Password</h3>
        <div className="input-box">
          {/* <ion-icon name="mail-outline"></ion-icon> */}
          <input type="text"  id="email"   />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-box">
          {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
          <input type="password"  id="password"   />
          <label htmlFor="password">Password</label>
        </div>

        <div className="input-box">
          {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
          <input type="password"  id="password"   />
          <label htmlFor="password"> Confirm Password</label>
        </div>

        <div className="forget">
          
          <Link className="text1" to="/login">Try Again ?</Link>
        </div>

        <button type="submit" className='x'>Verify</button>

        
      </div>
    </div>
  </form>
  </div>
      
  
  )
}

export default Login

