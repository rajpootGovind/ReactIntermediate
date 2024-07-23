import React from 'react'
import {useNavigate} from 'react-router-dom'


const Home = ()=>{
    const navigate = useNavigate()

    const clickHandler =()=>{
        navigate("/support")
        
    }
    const secClickHandler =()=>{
        navigate("/lab")
        
    }
    
    
    return(
        <div>
            <div>
                This is Homepage
            </div>
            <button onClick={clickHandler}>Move to support</button>
            <button onClick={secClickHandler}>Move to Lab</button>
            {/* <button onClick={nextClickHandler}>Next</button> */}
        </div>
    )
  
}

export default Home;