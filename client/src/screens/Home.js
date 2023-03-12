import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousel from '../components/Corousel'
const Home=()=>{
    const [cat,setcat]=useState([])
    const [food,setfood]=useState([])
    const [search,setsearch]=useState('')
    const datafood=async()=>{
        let data=await fetch('http://localhost:8080/foodData',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            }
        })
        data=await data.json()
        // console.log()
        setfood(data[0])
        setcat(data[1])

    }

     useEffect(()=>{
        datafood()
     },[])
    return(<><Navbar/><div><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
    <div class="carousel-inner" id="carousel">
        <div className="carousel-caption" style={{zIndex:"10"}}>
        <div className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} aria-label="Search"/>
      
    </div>  
        </div>
      <div class="carousel-item active">
        <img src="https://source.unsplash.com/random/900x700?noodles" class="d-block h-100 w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://source.unsplash.com/random/900x700?biryani" class="d-block h-100 w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://source.unsplash.com/random/900x700?burger" class="d-block h-100 w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
    <div className="container">
        
       {
        cat!==[]?cat.map((data1)=>{
         return(<div className='row m-1'>
             <div  key={data1._id} className='m-2'><p>{data1.category}</p></div>
         <hr />
           
            {food!==[]?food.filter((data2)=>
            
                data2.Category===data1.category && data2.name.toLowerCase().includes(search.toLocaleLowerCase())
            ).map((data3)=>{
                 return (<div className='col-12 col-md-6 col-lg-3'><Card foodname={data3.name} image={data3.img} price={data3.price}/></div>)
            }):<div>nothing</div>}
         
         </div>
         )
        }):<div>nothing</div>
    }
       
    </div>
   <div className="row m-5">
    </div>
   <Footer/>
    </>)
}
export default Home