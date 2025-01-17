import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function SignupForm({setIsLoggedIn}) {

    const[formData, setFormData] = useState({
        firstName:"",
        lastName: "",
        email:"",
        password:"",
        confirmPassword: ""

    })

    const changehandler = (event)=>{
        setFormData((previousdata)=>{
            return{
                ...previousdata,
                [event.target.name]:event.target.value
            }
        })
    }

    const[showPassword, setShowPassword] = useState(false)
    const[confirmPassword, setConfirmPassword] = useState(false)
    const[accountType, setAccountType] = useState("student")

    const submitHandler =(event)=>{
        event.preventDefault()
        if(formData.password !== formData.confirmPassword){
            toast.error("passwords do not match")
            return;
        }
        
        
            setIsLoggedIn(true)
            toast.success("Account created")
            navigate("/dashboard")
            
            const accountData = {
                ...formData
            };

            const finalData = {
                ...accountData,
                accountType
            }
            console.log("Printing final account data")
           console.log(finalData)

           
    }

   
   
    const navigate = useNavigate()

  return (
    <div>
        {/* student-instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1
        my-6 rounded-full max-w-max '>
            <button
            className={`${accountType==="student"?
            "bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} py-2 px-5
            rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button
            className={`${accountType==="instructor"?
            "bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} py-2 px-5
            rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* first name& last name */}
        <div className='flex gap-x-4 mt-[20px]'>
           <lable className="w-full">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'
                >First Name <sup className='text-pink-200'>*</sup></p>
                <input 
                required
                type="text"
                name="firstName"
                placeholder='Enter First name'
                onChange={changehandler}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                w-full p-[12px] shadow-[0_0.2px_rgba(255,255,255)] '
                />
            </lable>
            <lable className="w-full">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'
                >Last Name <sup className='text-pink-200'>*</sup></p>
                <input 
                required
                type="text"
                name="lastName"
                placeholder='Enter Last name'
                onChange={changehandler}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                w-full p-[12px] shadow-[0_0.2px_rgba(255,255,255)] '
                />
            </lable>
        </div>

        <lable className="mt-[10px]">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375] mt-[20px]'
                >Email Address <sup className='text-pink-200'>*</sup></p>
                <input 
                required
                type="email"
                name="email"
                placeholder='Enter Email'
                onChange={changehandler}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                w-full p-[12px] shadow-[0_0.2px_rgba(255,255,255)] '
                />
            </lable>

            {/* create password and confirm password */}
            <div className='flex gap-x-4 mt-[20px]'>
            <lable className="relative w-full">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'
                >Create Password <sup className='text-pink-200'>*</sup></p>
                <input 
                required
                type={showPassword?("text"):("password")}
                name="password"
                placeholder='Enter Password'
                onChange={changehandler}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                w-full p-[12px] shadow-[0_0.2px_rgba(255,255,255)] '
                />
              {/* eye icons with click events */}
                <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={()=>{
                    setShowPassword((prev)=>!prev)
                }}>
                   {showPassword?(<AiOutlineEyeInvisible className='font-[24px] fill-[#AFB2BF]'/>)

                   :(<AiOutlineEye className='font-[24px] fill-[#AFB2BF]'/>)} 
                </span>

            </lable>

            <lable className="relative w-full">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'
                >Confirm Password <sup className='text-pink-200'>*</sup></p>
                <input 
                required
                type={confirmPassword?("text"):("password")}
                name="confirmPassword"
                placeholder='Confirm Password'
                onChange={changehandler}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5
                w-full p-[12px] shadow-[0_0.2px_rgba(255,255,255)] '
                />
              {/* eye icons with click events */}
                <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={()=>{
                    setConfirmPassword((prev)=>!prev)
                }}>
                   {confirmPassword?(<AiOutlineEyeInvisible className='font-[24px] fill-[#AFB2BF]'/>)

                   :(<AiOutlineEye className='font-[24px] fill-[#AFB2BF]'/>)} 
                </span>

            </lable>
            </div>
          
            <div>
                <button className='w-full bg-yellow-50 rounded-[8px] font-medium 
        text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>
            </div>
          
        </form>
    </div>
  )
}

export default SignupForm