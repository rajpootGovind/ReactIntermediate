import React from 'react'
import { useNavigate } from 'react-router-dom'

function Supports() {
  const navigate = useNavigate();

  const gobackHandler =()=>{
    navigate(-1)
  }
  return (
    <div>
      <div>this is a Support page</div>
      <button onClick={gobackHandler}>GoBack</button>
    </div>
  )
}

export default Supports