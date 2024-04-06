import React from 'react'

function Pagination({listMovies,setMoviePerPage,curentPage,setCurrentPage}) {



  let pages =[];
  for(let i =1; i<=listMovies.totalPages; i++){
    pages.push(i)
  }


  return (
    <div className=' dark:bg-slate-500 flex justify-center gap-2 pt-2'>
    
     {
      pages.map((page,index)=>{
        return <div className={`px-2 py-1 cursor-pointer shadow-md shadow-slate-500 ${curentPage===page ? `bg-red-500 ring-2 ring-red-500`:`hover:bg-red-100 hover:ring-2 hover:ring-red-500`}  rounded-full bg-red-300`} key={index} onClick={()=>[setCurrentPage(page),setMoviePerPage(8)]}>{page}</div>
      })
     }

    </div>
  )
}

export default Pagination
