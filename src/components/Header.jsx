import React, { useEffect, useState } from 'react'
import { FaUserNinja } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiArchiveRegister } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";

import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import ModalSignUp from './ModalSignUp';
import ModalSignIn from './ModalSignIn';
import { Link } from 'react-router-dom';

function Header() {

 const [openMenuNavbar,setOpenMenuNavbar]=useState(false)

 const [openMenuSignUp,setOpenMenuSignUp]=useState(false)
 const [openMenuSignIn,setOpenMenuSignIn]=useState(false)



 const [darkMode, setDarkMode] = useState(false);
 const [scrollPosition, setScrollPosition] = useState(0);
 const [toggleIconUp, setToggleIconUp] = useState(false);
 console.log('xxxxxxx',toggleIconUp)


 const handleCloseMenuNavbar =(e)=>{
    if(e.target.id=="wrapper")
   {
    setOpenMenuNavbar(false)
 

   } 
  }

 

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


  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // console.log('YYYY',position)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition >= 300) {
      setToggleIconUp(true)
    } else {
        setToggleIconUp(false)
    } 
  }, [scrollPosition]);




  return (
    <>
   <header className="bg-orange-500/85 fixed top-0 right-0 z-40 w-full shadow-lg shadow-slate-600-500/50 border-t-2">
  <nav className="mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="flex items-center justify-center">
        {/* <span className="text-sm">Your Company</span> */}
        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="đ" />
      </a>
    </div>
  
    <div className="hidden lg:flex lg:gap-x-12">
      <Link to={`/`} className="text-lg font-semibold leading-6 text-gray-900 hover:text-white hover:scale-125">Lịch Chiếu</Link>
      <Link to={`/theater`} className="text-lg font-semibold leading-6 text-gray-900 hover:text-white hover:scale-125">Cụm Rạp</Link>
  
      <a href="#ung_dung" className="text-lg font-semibold leading-6 text-gray-900 hover:text-white hover:scale-125">Ứng Dụng</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <div className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-100 hover:text-white hover:scale-110 cursor-pointer" onClick={()=>[setOpenMenuSignIn(!openMenuSignIn),setOpenMenuSignUp(false)]} ><FaUserNinja/>Đăng Nhập <span aria-hidden="true"></span></div>
      <div className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-100 hover:text-white hover:scale-110 cursor-pointer" onClick={()=>[setOpenMenuSignUp(!openMenuSignUp),setOpenMenuSignIn(false)]}><GiArchiveRegister/>Đăng Ký <span aria-hidden="true"></span></div>
      <Link to={`/management`} className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-100 hover:text-white hover:scale-110 cursor-pointer"><FaDatabase/>Quản lý</Link>
      {/* <a href="#" className="flex items-center gap-3 text-sm font-semibold leading-6 text-gray-900 transition-all duration-100 hover:text-white hover:scale-125"><FaUserNinja/>Đăng Xuất <span aria-hidden="true"></span></a> */}
   
    </div>
  

    <div onClick={()=>setOpenMenuNavbar(!openMenuNavbar)} className=" lg:hidden">

    <GiHamburgerMenu size={20} className='cursor-pointer'/>
    </div>

    

  </nav>
  
  {/* Mobile menu, show/hide based on menu open state. */}
  <div id='wrapper' onClick={handleCloseMenuNavbar} className={`bg-neutral-600/70  z-20 fixed top-0 right-0 w-screen h-screen ${openMenuNavbar ? 'lg:hidden' : 'hidden'}   `}>
  <div className='bg-orange-500'>
    {/* Background backdrop, show/hide based on slide-over state. */}
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-orange-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt='adsa' />
        </a>
        <div onClick={()=>setOpenMenuNavbar(!openMenuNavbar)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
          <Link to={`/`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Lịch Chiếu</Link>
          <Link to={`/theater`} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Cụm Rạp</Link>
            {/* <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Lịch Chiếu</a> */}
            {/* <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Cụm Rạp</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Tin Tức</a> */}
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Ứng Dụng</a>
          </div>
          <div className="py-6">
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={()=>[setOpenMenuSignIn(!openMenuSignIn),setOpenMenuSignUp(false),setOpenMenuNavbar(false)]}>Đăng Nhập</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={()=>[setOpenMenuSignUp(!openMenuSignUp),setOpenMenuSignIn(false),setOpenMenuNavbar(false)]}>Đăng Ký</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Đăng Xuất</a>
            <Link to={'/management'} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Quản lý</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</header>

<ModalSignUp  isOpen={openMenuSignUp} setIsOpen={setOpenMenuSignUp} setOpenMenuSignIn={setOpenMenuSignIn} />
<ModalSignIn  isOpen={openMenuSignIn} setIsOpen={setOpenMenuSignIn} setOpenMenuSignUp={setOpenMenuSignUp} />
<div  onClick={() => {setDarkMode(!darkMode)}} className={`fixed h-8 w-8  z-10  flex items-center justify-center text-white text-[14px] shadow-sm shadow-slate-500 cursor-pointer ${darkMode ? 'bg-yellow-500' :'bg-red-400'} rounded-full top-11 left-2`}> {darkMode ? <FaMoon /> : <MdSunny />}</div>
<a href='#' className={`fixed h-14 w-14  z-10 bg-red-500 flex items-center justify-center text-white text-[14px] shadow-sm shadow-slate-500 ${toggleIconUp ? '' :'hidden'} rounded-full bottom-11 right-2`}>Đi lên</a>
</>
  )
}

export default Header
