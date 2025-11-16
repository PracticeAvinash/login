import React, { useState } from 'react';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';
import avatar from '../assets/avatar.png'
import './Login.css'

const Login = () => {

    const [username,setUsername]=useState("");
    const [password, setPassword] = useState("");
    // const [msg,setMsg]=useState("");
    const navigate = useNavigate();

  async function loginFunc(e) {
    e.preventDefault();
    try{
        const res=await axios.post("http://localhost:5000/login",{
            username,
            password
        })

        if(res.data.success){
            alert("Logined Successfully");
            localStorage.setItem("username",username);
            navigate("/home");
        }

    }
    catch{
        alert("Incorrect Credentials");
    }
  }

  return (
    
    <div>
        <h1>Login</h1>
        <form onSubmit={loginFunc}>
    <img src={avatar} width="50px" alt="Avatar" />
        <p>UserName</p>
        <input type="text"
        placeholder='Enter Username'
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

        <button type='submit'>Submit</button>
        <br />

 <NavLink to={"/"}>Create an Account?</NavLink>

        </form>

    </div>


  )
}

export default Login