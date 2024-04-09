import React from 'react'
import Header from '../components/Header'
import ListSeats from '../components/ListSeats'
import BrandTheatre from '../components/BrandTheatre'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import GoogleMap from '../components/GoogleMap'

function TheaterPage() {
  return (
    <div className='dark:bg-slate-500 w-screen h-screen flex flex-col '>
       <Header/>
       {/* <ListSeats/> */}

        
       <Outlet/>

       <BrandTheatre/>
      <GoogleMap/>
   
   <Footer/>
    </div>
  )
}

export default TheaterPage
