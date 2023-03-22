import React,{useState,useEffect} from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'
import logo from "./images/MoneyHive2.png"
import google from "./images/google.png"
import './style.scss'

const Login = () => {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(() => {
      setValue(localStorage.getItem('email'))
    })
  return (
    <div>
        {value?<Home/>:
        <div className="form-container">
            <div className="form-wrapper">
                <div className='logo'>
                    <img src={logo}/>
                </div>
                <div className='button-google' onClick={handleClick}>
                    <img src={google} alt="" />
                    <p>Signin With Google</p>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Login