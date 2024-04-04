import React, { useEffect, useState } from 'react'
import ManagementUser from './ManagementUser';
import ManagementMovie from './ManagementMovie';
import ManagementGeneral from './ManagementGeneral';
import { api_movies } from '../services/api_movies';

function Management() {

  const [toggleStateMenu, setToggleStateMenu] = useState(1);
  const [listMovies, setListMovies] = useState([]);

  const Links=[
    {
      name:"Tổng quan"
    },
    {
      name:"Người dùng"
    },
    {
      name:"Phim"
    }

  ]

  useEffect(() => {
    api_movies.getAllMoviesManagement()
      .then((data) => {
      
        setListMovies(data.data.content);

        console.log('data.data.content', data.data.content);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);



  return (
    <>
    <div className=' w-full h-full flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row w-full h-full'>
             <div className='md:w-2/6 lg:w-1/6  h-full bg-slate-400 '>
                   <div className='flex gap-2 items-center p-4'>
                      <div >
                        <img className='w-14 h-14 rounded-full' src="https://tse1.mm.bing.net/th?id=OIP.OF59vsDmwxPP1tw7b_8clQHaE8&pid=Api&P=0&h=220" alt='ccc'/>
                      </div>
                      <div className='flex flex-col'>
                         <h1 className='text-white font-bold'>Tran Minh Thanh</h1>
                         <div className='flex gap-2'><span className='text-cyan-700 cursor-pointer text-sm hover:text-slate-300'>Đăng nhập</span> <span className='text-cyan-700 cursor-pointer text-sm hover:text-slate-300'>Đăng xuất</span></div>
                      </div>
                   </div>
                    <div className='flex flex-row md:flex-col md:py-4  mx-1 gap-1'>

                      {Links.map((link,indexLink)=>{
                        return (
                          <div key={indexLink} className={`p-4 bg-slate-200 hover:bg-slate-50 ${toggleStateMenu === indexLink ? 'bg-blue-200':''} cursor-pointer relative`} onClick={()=>setToggleStateMenu(indexLink)}>
                            <div className='h-full w-full'>
                            {link.name}
                            </div>
                            {toggleStateMenu === indexLink && (
                            <div className='absolute  md:h-full md:w-1 right-0  bottom-0 w-full  h-1   bg-blue-600 '> </div>
                            )}
                          </div>
                        )
                      })}
                     
                    </div>
                     

             </div>
             <div  className='md:w-4/6 lg:w-5/6 h-full bg-stone-100 '>
                     <div className='flex w-full h-full justify-center items-center px-1 lg:px-10 '>

                  
                        <div className={`  h-screen w-screen  ${toggleStateMenu===0 ? '' :'hidden'} cursor-pointer`}>
                        <ManagementGeneral/>
                        </div>
                        <div className={`  h-screen w-screen   ${toggleStateMenu===1 ? '' :'hidden'} cursor-pointer`}>
                       
                        <ManagementUser/>
                        </div>
                        <div className={` h-screen w-screen overflow-auto
min-h-[600px] min-w-[300px]  ${toggleStateMenu===2 ? '' :'hidden'} cursor-pointer`}>
                            <h1 className='text-4xl text-center text-cyan-500 py-4'>Quản Lý Phim</h1>
                          <ManagementMovie listMovies={listMovies}/>
               

                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Management

