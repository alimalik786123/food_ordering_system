import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousel from '../components/Corousel'
const Home=()=>{
    const [cat,setcat]=useState([])
    const [food,setfood]=useState([])
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
    return(<><Navbar/><div><Corousel/></div>
    <div className="container">
       {
        cat!==[]?cat.map((data1)=>{
         return(<div className='row mb-3'>
            <div  key={data1._id} className='m-3'><h3>{data1.category}</h3></div>
         <hr />
            {food!==[]?food.filter((data2)=>
                data2.Category===data1.category
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