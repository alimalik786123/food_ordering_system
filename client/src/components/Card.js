import React from "react";
const Card=()=>{
   return( <div class="card m-2" style={{"width": "18rem"}}>
   <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="card-img-top" alt="..."/>
   <div class="card-body">
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <div className="container w-100"><select className="m-2  h-100 bg-gradient rounded-3" name="list" id="">{Array.from(Array(6),(e,i)=>{
        return(<><option key={i+1} value={i+1}>{i+1}</option></>)
     })}</select>
     <select name="" className="m-2  h-100 bg-gradient rounded-3" id=""><option value="half">half</option><option value="half">half</option></select>
     <div className="d-inline fs-5">Total Price</div>
     </div>
   </div>
   
 </div>)
}
export default Card