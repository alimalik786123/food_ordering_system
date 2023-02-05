import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './login.css'

export default function Signup() {
    const [data,setdata]=useState({name:'',email:'',password:''})
    let redirect=useNavigate()
    const setfun=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=async(e)=>{
        e.preventDefault()
        const response= await fetch("http://localhost:8080/user",{
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({name:data.name,email:data.email,password:data.password})
        })
        const resp=await response.json()
        console.log(resp);
        if(resp.success){
           redirect("/login")
        }
        else if(!resp.success){
            alert("Enter valid details")
        }
        

    }
  return (
    
   
 <><div className='container login'>
   <form  onSubmit={submit}>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Name</label>
     <input type="text" class="form-control" name='name' value={data.name} onChange={setfun}/>
     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Email</label>
     <input type="email" class="form-control " name='email' value={data.email} onChange={setfun}/>
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input type="password" class="form-control" name='password' value={data.password} onChange={setfun}/>
   </div>
   
   
   <button type="submit" class="btn btn-primary">Submit</button>
   <Link to="/login" className='m-4 btn btn-success'>Already account?</Link>

 </form></div>
 </>
  )
    
}
