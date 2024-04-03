import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';

function NightPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleIcon, setToggleIcon] = useState(false);
  console.log('xxxxxxx',toggleIcon)

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setDarkMode(theme === 'dark');
  }, []);

  

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.lang = 'en';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);


  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition >= 500) {
        setToggleIcon(true)
    } else {
        setToggleIcon(false)
    } 
  }, [scrollPosition]);

  return (
    <div className='dark:bg-slate-500 w-screen h-[1200px] bg-red-400 flex items-center justify-center'>
      <div
        className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1'
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? <FaMoon /> : <MdSunny />}
      </div>

      <a href='#' className={`fixed h-28 bg-orange-600 w-28 ${toggleIcon ? '' :'hidden'} rounded-full bottom-3 right-2`}></a>
    </div>
  );
}

export default NightPage;
