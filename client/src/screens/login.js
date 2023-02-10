import React,{useState} from 'react'
import './login.css'
import { Link,redirect,useNavigate } from 'react-router-dom'
export default function Login() {
    const [data,setdata]=useState({email:'',password:''})
    let redirect1=useNavigate()
    const setfun=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=async(e)=>{
        e.preventDefault()
        const response= await fetch("http://localhost:8080/login",{
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({email:data.email,password:data.password})
        })
        const resp=await response.json()
        console.log(resp);
        if(resp.success){
          localStorage.setItem("token",resp.token)
          redirect1("/")
        }
        else if(!resp.success){
            alert("Enter valid details")
        }
        

    }
  return (
 <><div className='container login'>
   <form onSubmit={submit}>
   
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Email</label>
     <input type="email" class="form-control " name='email' value={data.email} onChange={setfun}/>
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input type="password" class="form-control" name='password' value={data.password} onChange={setfun}/>
   </div>
   
   
   <button type="submit" class="btn btn-primary">Submit</button>
   <Link to="/signup" className='m-4 btn btn-success'>new here?</Link>

 </form></div>
 </>
  )
}
