import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from "react-router-dom";
function Login(){
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const emailref=useRef();
const navigate= useNavigate();
useEffect(()=>{
    emailref.current.focus();

},[])
const  handleLogin=()=>{
    if (email==="admin@gmail.com" && password==="admin@1234"){
        alert("login sucessfull");
        setIsAuth(true);
        navigate("/admin");
    
    }else{
        alert("wrong email or password")
    }
}



return(
    <div>
    <h2>Login</h2>
    <input ref={emailref} type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <button onClick={handleLogin}>Login</button>
    </div>
)
};
export default Login;