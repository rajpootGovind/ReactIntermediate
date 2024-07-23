import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const gobackHandler =()=>{
    navigate(-1)
  }
  return (
    <div>
        <div>
            this is a Abouts page
        </div>
        <button onClick={gobackHandler}>GO back</button>
    </div>
  )
}

export default About