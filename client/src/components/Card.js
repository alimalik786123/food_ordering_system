import React from "react";
const Card=(props)=>{
   return( <div class="card m-2" style={{"width": "15rem"}}>
   <img src={props.image} class="card-img-top " style={{height:"200px",objectFit:"fill"}} alt="..."/>
   <div class="card-body">
     <p class="card-text">{props.foodname} </p>
     <div className="container w-100"><select className="m-2  h-100 bg-gradient rounded-3" name="list" id="">{Array.from(Array(6),(e,i)=>{
        return(<><option key={i+1} value={i+1}>{i+1}</option></>)
     })}</select>
     <select name="" className="m-2  h-100 bg-gradient rounded-3" id=""><option value="half">half</option><option value="half">half</option></select>
     <div className="d-inline fs-5">Total Price : {props.price}</div>
    
     </div>
     <hr />
     <button className="btn btn-success justify-center ms-2"> <i class="bi bi-cart-plus"></i>
add cart</button>
   </div>
   
 </div>)
}
export default Card