import React from 'react'
import Tempelate from '../components/Tempelate'
import signupImg from "../assets/signup.png"

function Signup({setIsLoggedIn}) {
  return (
    <Tempelate
    title="Join the millions learning to code with StudyNotion for free"
    des1="Builds skills for today, tomorrow, and beyond."
    des2="Education to future-proof your career."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
/>
  )
}

export default Signup