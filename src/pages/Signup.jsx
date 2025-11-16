import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png'
import './Signup.css'


const Signup = () => {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [newPassword,setNewpassword]=useState("");

    const navigate=useNavigate();

    async function signupFunc(e) {
        e.preventDefault();
        if(password!=newPassword){
            alert("Password and Confirm Password Doesn't Match!!");
            return;
        }
        try{
            const res=await axios.post("http://localhost:5000/signup",{

                username,
                password
            })
            if(res.data.success){
                alert("Account Created Successfully!");
                navigate("/login");
            }
            else{
                alert(res.data.message);
            }
        }
        catch{
            alert("Account already Exists!!");
        }
    }

  return (
    <div>
    <h1>Register</h1>
    <form onSubmit={signupFunc}>

    <img src={avatar} width="50px" alt="avatar" />

    <p>UserName</p>
        <input
         type="text"
        placeholder='Enter UserName'
        onChange={(e)=>setUsername(e.target.value)}
        required
         />
         <br />
         <p>Password</p>
         <input type="password"
         placeholder='Enter Password'
         onChange={(e)=>setPassword(e.target.value)}
         required
          />
<br />
<p>Confirm Password</p>
          <input type="password"
          placeholder='Re-Enter Password'
          onChange={(e)=>setNewpassword(e.target.value)}
           />
           <br />

           <button type='submit'>SignUp</button>
           <br />
            <NavLink to={"/login"}>Already have an Account?</NavLink>
   
    </form>
    </div>
  )

}

export default Signup