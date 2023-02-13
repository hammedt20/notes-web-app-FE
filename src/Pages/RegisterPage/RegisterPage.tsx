import * as React from 'react';
import { useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import login_png from '../../assets/img/pablo-sign-in 1.png';
import { Button } from '../../Components/Button/Button';
// import Form from '../../Components/Form/Form';
import './RegisterPage.css'


const title: string = 'signup'



export function RegisterPage () {
    const navigate = useNavigate()
    const [showText, setShowText] = useState<Boolean>(false)
    const [registerDetails, setRegisterDetails] = useState<{
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const {name, value} = e.target
        setRegisterDetails(prev => {
            return({
                ...prev,
                [name]: value
            })
        })
    }
    const handleShowText: React.MouseEventHandler<SVGElement> = () => {
        setShowText(prev => !prev)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = (e)=>{
        e.preventDefault();
        navigate('/');
      }
  return (
    <div>
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
                <p>Enter details to sign up.</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <input 
                    type = 'text' 
                    name = 'name' 
                    placeholder='Name'
                    value={registerDetails.name}
                    onChange={handleChange} 
                />
                <input 
                    type = 'email' 
                    name = 'email' 
                    placeholder='Email'
                    value={registerDetails.email}
                    onChange={handleChange} 
                />
                <div className='password-input'>
                    <input 
                    type = {showText ? 'text' : 'password'} 
                    name = 'password' 
                    placeholder='Password' 
                    value={registerDetails.password}
                    onChange={handleChange}
                    />
                    <BsEyeSlash className='eyeslash'  onClick = {handleShowText} />
                </div>
                <div className='password-input'>
                    <input 
                    type = {showText ? 'text' : 'password'} 
                    name = 'confirmPassword' 
                    placeholder='Confirm Password' 
                    value={registerDetails.confirmPassword}
                    onChange={handleChange}
                    />
                    <BsEyeSlash className='eyeslash'  onClick = {handleShowText} />
                </div>
                <div className='sign-up'>
                <div className='sign-up'>
                    Do you have an account? 
                    <Link to = {`/login`} className='sign-up-link'>Log in</Link>
                </div>
                </div>
                <Button title = {title}/>
            </form>
        </div>
        </div>
    </div>
  );
}
