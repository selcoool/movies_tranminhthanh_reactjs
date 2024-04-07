import React, { useEffect, useState } from 'react'
import ManagementUser from './ManagementUser';
import ManagementMovie from './ManagementMovie';
import ManagementGeneral from './ManagementGeneral';
import { api_movies } from '../services/api_movies';
import { api_users } from '../services/api_users';
import { Link } from 'react-router-dom';
import ModalSignUp from './ModalSignUp';
import ModalSignIn from './ModalSignIn';

import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import ModalAddMovie from './ModalAddMovie';
import ModalEditMovie from './ModalEditMovie';

function Management() {

  const [toggleStateMenu, setToggleStateMenu] = useState(0);
  const [listMovies, setListMovies] = useState([]);
  const [listUsers, setListUsers] = useState([]);


  const [openMenuSignUp,setOpenMenuSignUp]=useState(false)
 const [openMenuSignIn,setOpenMenuSignIn]=useState(false)


 const [darkMode, setDarkMode] = useState();
 const [scrollPosition, setScrollPosition] = useState(0);
 const [toggleIconUp, setToggleIconUp] = useState(false);
 console.log('xxxxxxx',darkMode)


 const [openMenuAddMovie,setOpenMenuAddMovie]=useState(false)
 const [openMenuEditMovie,setOpenMenuEditMovie]=useState(false)

 const [openMenuAddUser,setOpenMenuAddUser]=useState(false)
 const [openMenuEditUser,setOpenMenuEditUser]=useState(false)
 console.log('openMenuAddMovie',openMenuAddMovie)


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


  useEffect(() => {
    api_users.getAllUsersManagement()
      .then((data) => {
      
        setListUsers(data.data.content);

        console.log('data.data.content USER', data.data.content);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);





 
 
   useEffect(() => {
     const theme = localStorage.getItem('theme');
     setDarkMode(theme === 'dark');
   }, []);
 
   
 
   useEffect(() => {
     if (darkMode) {
       document.documentElement.classList.add('dark');
       localStorage.setItem('theme', 'dark');
     } else {
       document.documentElement.classList.remove('dark');
       localStorage.setItem('theme', 'light');
     }
   }, [darkMode]);




  return (
    <>
    <div className=' w-full h-full flex flex-col justify-center items-center'>
        <div className=' flex flex-col md:flex-row w-full h-full'>
             <div className='md:w-2/6 lg:w-1/6  h-full bg-orange-400 '>
                   <div className='flex flex-col gap-2 items-start justify-center p-4  group'>
                      <div className='flex justify-center items-start gap-1'>
                        <Link to={'/'} className='relative  flex justify-center items-center'>
                        <img className='w-16 h-16 rounded-full' src="https://tse1.mm.bing.net/th?id=OIP.OF59vsDmwxPP1tw7b_8clQHaE8&pid=Api&P=0&h=220" alt='ccc'/>
                        <div className='absolute text-white rounded-full  transition-all duration-100 hidden group-hover:flex hover:scale-105'>
                          Trở về
                        </div>
                       </Link>
                        <span className='text-red-600 font-bold'>Tran Minh Thanh
                        
                                <div className='flex flex-col'>
                                <div className='flex justify-center items-center gap-0.5  '><span className='text-cyan-900 cursor-pointer text-[10px] hover:text-slate-300' onClick={()=>[setOpenMenuSignIn(!openMenuSignIn),setOpenMenuSignUp(false)]}>Đăng nhập</span> || <span className='text-cyan-900 cursor-pointer text-[10px] hover:text-slate-300' onClick={()=>[setOpenMenuSignUp(!openMenuSignUp),setOpenMenuSignIn(false)]}>Đăng Ký</span></div>
                              </div> 
                        
                        </span>
                      </div> 
                   </div>
                    <div className=' flex flex-row md:flex-col md:py-4  gap-0.5'>

                      {Links.map((link,indexLink)=>{
                        return (
                          <div key={indexLink} className={` p-4 bg-slate-200 shadow-gray-300 shadow-sm hover:bg-slate-50 ${toggleStateMenu === indexLink ? 'bg-blue-200':''} cursor-pointer relative`} onClick={()=>setToggleStateMenu(indexLink)}>
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
             <div  className='md:w-4/6 lg:w-5/6 h-full bg-orange-200'>
                    

                     <div className='dark:bg-blue-100 flex w-full h-full justify-center items-center px-1 lg:px-10  '>

                  
                        <div className={`  h-screen w-screen overflow-auto lg:min-h-[600px] min-w-[300px]  pb-20 ${toggleStateMenu===0 ? '' :'hidden'} cursor-pointer`}>
                        <ManagementGeneral listUsers={listUsers}/>
                        </div>
                        <div className={`  h-screen w-screen overflow-auto lg:min-h-[600px] min-w-[300px]  pb-20  ${toggleStateMenu===1 ? '' :'hidden'} cursor-pointer`}>
                        <h1 className='text-4xl text-center text-cyan-500 py-4'>Quản Lý Người Dùng</h1>
                        <ManagementUser listUsers={listUsers} setOpenMenuEditUser={setOpenMenuEditUser} setOpenMenuAddUser={setOpenMenuAddUser}  />
                        </div>
                        <div className={`h-screen w-screen overflow-auto  pb-20 lg:min-h-[600px] min-w-[300px]  ${toggleStateMenu===2 ? '' :'hidden'} cursor-pointer`}>
                            <h1 className='text-4xl text-center text-cyan-500 py-4'>Quản Lý Phim</h1>
                            
                          <ManagementMovie listMovies={listMovies}  setOpenMenuEditMovie={setOpenMenuEditMovie} setOpenMenuAddMovie={setOpenMenuAddMovie}/>
               

                        </div>

                      
                    </div>
            </div>
        </div>
    </div>

    <ModalSignUp  isOpen={openMenuSignUp} setIsOpen={setOpenMenuSignUp} setOpenMenuSignIn={setOpenMenuSignIn} />
    <ModalSignIn  isOpen={openMenuSignIn} setIsOpen={setOpenMenuSignIn} setOpenMenuSignUp={setOpenMenuSignUp} />
    <ModalAddMovie  isOpen={openMenuAddMovie} setIsOpen={setOpenMenuAddMovie} />
    <ModalEditMovie  isOpen={openMenuEditMovie} setIsOpen={setOpenMenuEditMovie} />

    <div  onClick={() => {setDarkMode(!darkMode)}} className={`fixed h-8 w-8  z-10  flex items-center justify-center text-white text-[14px] shadow-sm shadow-slate-500 cursor-pointer ${darkMode ? 'bg-yellow-500' :'bg-red-400'} rounded-full top-6 right-2`}> {darkMode ? <FaMoon /> : <MdSunny />}</div>
    </>
  )
}

export default Management

