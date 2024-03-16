import React, { useEffect, useState } from 'react';
import { api_movies } from '../services/api_movies';
import { FaRegCirclePlay } from "react-icons/fa6";
import ModalMovie from './ModalMovie';

function ListMovie() {
  const [listMovies, setListMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [maPhim, setMaPhim] = useState();

  console.log('dddddxxx',listMovies)
 
  useEffect(() => {
    api_movies.getAllMovies()
      .then((data) => {
           console.log('xxxxxxxxxxxxx',data.data.content)
        setListMovies(data.data.content);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <div className='w-full h-full py-7 relative'>
      <div className='grid grid-cols-4 gap-4 px-20'>
        {listMovies.map((movie) => (
          <div key={movie.maPhim} className='relative cursor-pointer group'>
            <div className='w-full '>
              <img className='w-full h-80 object-cover' src={movie.hinhAnh} alt={movie.tenPhim} />
            </div>

            <div className='flex flex-col py-3  transition-all duration-100 group-hover:hidden'>
              <div className='pb-3 flex items-center gap-3'>
                <span className='text-white bg-red-500 p-1 rounded'>C18</span>
                <h1 className='font-bold text-black'>{movie.tenPhim}</h1>
              </div>
              <p className='line-clamp-2'>{movie.moTa}</p>
            </div>

            <div className='absolutew-full h-full transition-all duration-100 top-0 flex-col py-3 hidden group-hover:flex'>
              <div className='absolute top-28 w-full flex justify-center items-center' onClick={()=>[setIsOpen(!isOpen),setMaPhim(movie.maPhim)]}>
                <FaRegCirclePlay size={60} />
              </div>
              <div className='absolute w-full bottom-5 p-3 bg-red-500 text-white text-center'>ĐẶT VÉ</div>
            </div>
          </div>
           
        ))}

     <ModalMovie isOpen={isOpen} setIsOpen={setIsOpen} maPhim={maPhim} />
      </div>


     

    </div>
  );
}

export default ListMovie;
