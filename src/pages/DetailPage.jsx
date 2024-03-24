import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BrandTheatre from '../components/BrandTheatre'
import DetailMovie from '../components/DetailMovie'
import { useParams } from 'react-router-dom'

function DetailPage() {
    let {tenPhim}=useParams();
 
  return (
    <div className='w-screen h-screen flex flex-col '>
    
    <Header/>
    <DetailMovie tenPhim={tenPhim}/>
    <BrandTheatre/>
    <Footer/>
    </div>
  )
}

export default DetailPage
