import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousel from '../components/Corousel'
const Home=()=>{
    return(<><Navbar/><div><Corousel/></div>
    <Card/>
    <Card/>
   <Footer/>
    </>)
}
export default Home