import * as React from 'react';
import './LoginPage.css'
import login_png from '../../assets/img/pablo-sign-in 1.png';
import { useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';


const title: string = 'login'


export default function LoginPage () {
  const [showText, setShowText] = useState<Boolean>(false);
  const [loginDetails, setLoginDetails] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: ''
  })

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.target;
    console.log({
      ...loginDetails
    })
    setLoginDetails(prev => {
      return({
        ...prev,
        [name]: value
      })
    })
  }

  const handleShowText: React.MouseEventHandler<SVGElement> = () => {
    setShowText(prev => !prev)
  }
  return (
    <div className='login-page'>
      <div className='png-section'>
        <div className='png-section-head'>
            <h1>Notes</h1>
        </div>
        <img src={login_png} alt=''/>
      </div>
      <div className='form-section'>
        <div className='form-section-details'>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
        </div>
        <form className='form'>
          <input 
            type = 'email' 
            name = 'email' 
            placeholder='Email'
            value={loginDetails.email}
            onChange={handleChange} 
          />
          <div className='password-input'>
            <input 
              type = {showText ? 'text' : 'password'} 
              name = 'password' 
              placeholder='Password' 
              value={loginDetails.password}
              onChange={handleChange}
            />
              <BsEyeSlash className='eyeslash'  onClick = {handleShowText} />
          </div>
          <div className='sign-up'>
            Don't have an account? 
            <Link to = {`/signup`} className='sign-up-link'>Sign up</Link>
          </div>
          <Button title = {title}/>
        </form>
      </div>
    </div>
  );
}
