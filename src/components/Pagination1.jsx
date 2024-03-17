import React from 'react'

function Pagination({totalMovie,moviePerPage,curentPage,setCurrentPage}) {
  
  let pages =[];
  for(let i =1; i<=Math.ceil(totalMovie/moviePerPage); i++){
    pages.push(i)
  }


  console.log('pages',pages)
  return (
    <div className='flex justify-center gap-2 '>
    
     {
      pages.map((page,index)=>{
        // {  console.log('curentPage',curentPage)
        // console.log('page',page)}
        return <div className={`px-2 py-1 cursor-pointer ${curentPage===page ? `bg-red-500 ring-2 ring-red-500`:`hover:bg-red-100 hover:ring-2 hover:ring-red-500`}  rounded-full bg-red-300`} key={index} onClick={()=>setCurrentPage(page)}>{page}</div>
      })
     }

    </div>
  )
}

export default Pagination
