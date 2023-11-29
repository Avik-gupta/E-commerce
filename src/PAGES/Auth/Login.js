import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {
  
  return (
    <div className='loginpage'>
      
      <form action="" className='form2'>
      <div className='homebtn'>
      <Link to='/'>
              <button className='home' style={{backgroundColor:'white'}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
               Home
              </button>
      </Link>
      </div>
     
    <div className="formji">
      <div className="form-value">
        <h2>Login</h2>
        <div className="input-box">
          <input type="text"  id="email"   />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-box">
          <input type="password"  id="password"   />
          <label htmlFor="password">Password</label>
        </div>

        <div className="forget">
          <input type="checkbox" />
          <label>Remember me</label>
          <Link className="text1" to="/forgotpassword">Forget Password </Link>
        </div>

        <button type="submit" className='x'>Log in</button>

        <div className="register">
          <div>
            <p>Don't have a account</p>
            <Link to="/signup" className="click2">  Register Here !</Link>
          </div>
        </div>
      </div>
    </div>
  </form>
  </div>
      
  
  )
}

export default Login
