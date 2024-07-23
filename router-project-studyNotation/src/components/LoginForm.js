import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';



function LoginForm({setIsLoggedIn}) {
    const[formData, setFromData] = useState({email:"", password:""})

    // for password
    const[showpassword, setShowPassword] = useState(false)

    const changehandler = (event)=>{
        setFromData((previousdata)=>{
            return{
                ...previousdata,
                [event.target.name]:event.target.value
            }
        })
    }
    
    const submitHandler =(event)=>{
        event.preventDefault()
        setIsLoggedIn(true);
        toast.success("Logged In")
        console.log("printing the form data")
        console.log(formData)
        navigate("/dashboard")
        
    }

    const navigate = useNavigate();

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <lable className="w-full">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'
            >Email Address<sup className='text-pink-200'>*</sup></p>
            
            <input 
            required
            type="email"
            value={formData.email}
                name="email"
                onChange={changehandler}
                placeholder='Enter email address'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                w-full p-[12px] shadow-[0_0.2px_rgba(255,255,255)] '
            />
        </lable>

        <lable className="w-full relative">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
            Password<sup className='text-pink-200'>*</sup></p>
            <input required
            type={showpassword?("text"):("password")}
            value={formData.password}
            name="password"
                onChange={changehandler}
                placeholder='Enter Password'
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                w-full p-[12px] shadow-[0_0.2px_rgba(255,255,255)] '
            />
              <span 
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={()=>{
                setShowPassword((prev)=>!prev)
              }}>
                {showpassword ? (<AiOutlineEyeInvisible className='font-[24px] fill-[#AFB2BF]'/>)
                :(<AiOutlineEye className='font-[24px] fill-[#AFB2BF]' />)}
              </span>

              <Link to="#">
                <p className='tex-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
              </Link>

        </lable>

        <button className=' bg-yellow-50 rounded-[8px] font-medium 
        text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm