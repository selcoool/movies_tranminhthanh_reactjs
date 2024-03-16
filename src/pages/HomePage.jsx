import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ListMovie from '../components/ListMovies'

function HomePage() {
  return (
    <div className='w-screen h-screen flex flex-col gap-1'>
     <Header/>
     <Banner/>
      <ListMovie/>
     
     {/* header
     banner
     list movie
     footer */}
    </div>
  )
}

export default HomePage
