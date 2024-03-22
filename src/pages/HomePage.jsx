import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ListMovie from '../components/ListMovies'
import Footer from '../components/Footer'
import BrandTheatre from '../components/BrandTheatre'

function HomePage() {
  return (
    <div className='w-screen h-screen flex flex-col '>
    
     <Header/>
    
     <Banner/>
      <ListMovie/>

      <BrandTheatre/>
   
      <Footer/>
     
     {/* header
     banner
     list movie
     footer */}
    </div>
  )
}

export default HomePage
