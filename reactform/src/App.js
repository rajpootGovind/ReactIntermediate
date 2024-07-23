import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

//  const[firstName, setFirstName] = useState("")
//  const[lastName, setLastName] = useState("")
//  console.log(firstName)
//  console.log(lastName)
//   const changeFirstNameHandler=(event)=>{
    // console.log("pring first name")
    //  console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }
  // const changeLastNameHandler=(event)=>{
  //   // console.log("printing last name");
  //   //  console.log(event.target.value)
  //   setLastName(event.target.value)
  // }

  const[formData, setFormData] = useState({firstName:"",
                                          lastName :"",
                                          email: "",
                                          comment: "",
                                          isVisible:true,
                                          mode:"",
                                          favCar:""
  })

  const changeHandler =(event)=>{
    setFormData((previousData) =>{
      // object destructuring for checking
      const{type,value,checked,name}=event.target;
      return{
        ...previousData,
        [event.target.name] :type==="checkbox"?checked:event.target.value 
      }
  })
  }
  


  const submitHandler =(event)=>{
      event.preventDefault();
      //print
      console.log("finally printing all the data of form")
      console.log(formData)
  }
  

  return (
    <div className="App">
     <form onSubmit={submitHandler}>
      <input
      type="text"
      placeholder='First Name'
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
      />

      <br/>
      <br/>

      <input
      type="text"
      placeholder='Last Name'
        onChange={changeHandler}
        name="lastName"
        value={formData.lasstName}
      />

      <br/>
      <br/>

      <input type="email"
      placeholder='email'
      name="email"
      onChange={changeHandler}
      value={formData.email}
      />
      
      <br/>
      <br/>

      <textarea
      placeholder='enter your comment here'
      onChange={changeHandler}
      name="comment"
      value={formData.text}
      />
      <br></br>
      <br></br>

      <input
      type="checkbox"
      onChange={changeHandler}
      name="isVisible"
        id="isVisible"
        //for checked
        checked={formData.isVisible}
      />

      <label htmlFor="isVisible">Am i visible ?</label>
       
       <br/>
       <br/>

     
      <fieldset>
        <legend>Mode:</legend>
        <input 
      type="radio"
      onChange={changeHandler}
      name='mode'
      value="Online mode"
      id="Online mode"
        checked={formData.mode==="Online mode"}
      />
{/* for select one radio button among of all we have to use Same NAME */}
      <label htmlFor="Online mode">Online mode</label>
      <input 
      type="radio"
      onChange={changeHandler}
      name='mode'
      value="Offline mode"
      id="Offline mode"
        checked={formData.mode==="Offline mode"}
      />

      <label htmlFor="Offline mode">Offline mode</label>
      </fieldset>

      <br/>
      <br/>
      <label htmlFor="favCar">Tell Me your fav Car: </label>
       <select
        name="favCar"
        onChange={changeHandler}
        id="favCar"
        value={formData.favCar}
       >
        <option value="Scarpio">Scarpio</option>
       <option value="Bolero">Bolero</option>
       <option value="Verna">Verna</option>
       <option value="Tata">Tata</option>
       <option value="Thar">Thar</option>
       </select>

      <br/>
      <br/>
      <button>submit</button>
       
     </form>
    </div>
  );
}

export default App;
