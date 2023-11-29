import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='loginpage'>
      
      
      <form action="" className='entry'>

      <div className='homebtn2' style={{backgroundColor:'white'}}>
      <Link to='/'>
              <button className='home'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
               Home
              </button>
      </Link>
      </div>

    <div className="form-box1">
      <div className="form-value1">
        <h2>Register Here</h2>
        
        <div className="input-box">
          <input type="text"  id="name"  required/>
          <label htmlFor="name">Name</label>
        </div>

        <div className="input-box">
          <input type="email"  id="email" required />
          <label htmlFor="email">Enter Email</label>
        </div>

        <div className="input-box">
          <input type="password"  id="password" required />
          <label htmlFor="password">Enter Password</label>
        </div>

        <div className="input-box">
          <input type="number"  id="mobile" required />
          <label htmlFor="mobile">Mobile</label>
        </div>

        <div className="input-box">
          <input type="text"  id="gender" required />
          <label htmlFor="gender">Gender</label>
        </div>

        <button className='click'>Register</button>

        
      </div>
    </div>
  </form>
      
    </div>
  )
}

export default SignUp
