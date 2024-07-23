import { useState } from "react";



function App() {
  const[formData, setFormData] = useState({firstName:"", lastName:"", email:"", streetAddress:"", city:"", 
    pincode:'', comments:true, candidates:false, offers:false
  })

  const changeHandler = (event) =>{
    console.log(formData)
    setFormData((previousData)=>{
      return{
        ...previousData,
        [event.target.name] : event.target.value
      }
     
    })
  }
  return (
    <div className="App">

      <div>
       <div>
        <label htmlFor="firstname">First name</label>
       </div>
       <input type="text"
      placeholder='First name'
        onChange={changeHandler}
        name="firstName"
        id="firstName"
      />
      </div>

      <div>
       <div>
        <label htmlFor="">Last name</label>
       </div>
       <input type="text"
      placeholder='Last name'
      onChange={changeHandler}
      name ="lastName"
      />
      </div>

      <div>
       <div>
        <label >email</label>
       </div>
       <input type="email"
      placeholder='email'
      onChange={changeHandler}
      name="email"
      />
      </div>

      <div>
       <div>
        <label >Country</label>
       </div>
       <select
        name="country"
        onChange={changeHandler}>
      
       <option value="India">India</option>
       <option value="USA">USA</option>
       <option value="England">England</option>
       <option value="China">China</option>
       <option value="Russia">Russia</option>
       </select>
      </div>


      <div>
       <div>
        <label >Street address</label>
       </div>
       <input type="text"
      placeholder='Street address'
      onChange={changeHandler}
      name="streetAddress"
      />
      </div>

      <div>
       <div>
        <label >City</label>
       </div>
       <input type="text"
      placeholder='City'
      onChange={changeHandler}
      name="city"
      />
      </div>

      <div>
       <div>
        <label >Zip/Postal code</label>
       </div>
       <input type="number"
      placeholder='Zip/Postal code'
      onChange={changeHandler}
      name="pincode"
      />
      </div>

      <div>
        <div>
        <lable>By email</lable>
        </div>
        <div>
          <input type="checkbox"
            name="comments"
            id="comments"
            onChange={changeHandler}
          />
          <label htmlFor="comments">Comments <div><span>this is my 1st para</span></div></label>
        </div>
       
        <div>
          <input type="checkbox"
            name="candidates"
            id="candidates"
            onChange={changeHandler}
          />
          <label htmlFor="candidates">Candidates<div><span>this is my 2nd para</span></div> </label>
          
         
        </div>
        <div>
          <input type="checkbox"
            name="offers"
            id="offers"
            onChange={changeHandler}
          />
         
         <label htmlFor="offers">Offers<div><span>this is my 3rs para</span></div></label>
         
          
         
         
        </div>
      </div>

    </div>
  );
}

export default App;
