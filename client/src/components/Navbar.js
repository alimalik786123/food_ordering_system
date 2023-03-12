import React from "react";
import Footer from "./Footer";
import {Link, useNavigate} from "react-router-dom"
const Navbar=()=>{
  const navigate=useNavigate()
  const logout1=()=>{
        localStorage.removeItem("token")
        navigate('/login')
  }
    return(<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand fs-1" to="/sfae">Food order</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <Link class="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("token"))?
         <li class="nav-item">
            
        <Link class="nav-link active fs-5" aria-current="page" to="/">my orders</Link>
        <div className="btn btn-success mx-1">Cart</div><button className="btn btn-success mx-1" onClick={logout1()}>logout</button>
       </li>:<><div><h1>nothing</h1></div></>  
      }
        
        </ul>
        
    </div>
  </div>
</nav>
    </>)
}
export default Navbar