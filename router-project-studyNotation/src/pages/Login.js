import React from 'react'
import Tempelate from '../components/Tempelate'
import loginImg from "../assets/login.png"

function Login({setIsLoggedIn}) {
  return (
    <Tempelate
        title="Welcome Back"
        des1="Builds skills for today, tomorrow, and beyond."
        des2="Education to future-proof your career."
        image={loginImg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login