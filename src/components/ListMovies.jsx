import React, { useEffect, useState } from 'react';
import { api_movies } from '../services/api_movies';
import { FaRegCirclePlay } from "react-icons/fa6";
import ModalMovie from './ModalMovie';
import Pagination from './Pagination';

import moment from 'moment';
import 'moment/locale/vi';
function ListMovie() {
  const [listMovies, setListMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [maPhim, setMaPhim] = useState();


  const [curentPage, setCurrentPage] = useState(1);
  const [moviePerPage, setMoviePerPage] = useState(8);

 
  useEffect(() => {
    api_movies.getAllMoviesPagination(curentPage,moviePerPage)
      .then((data) => {
      
        setListMovies(data.data.content);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [curentPage,moviePerPage]);


  return (
    <div>
    <div className='w-full h-full py-7 flex flex-col  relative'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 px-20'>
        {listMovies.items?.map((movie) => (
          <div key={movie.maPhim} className='relative overflow-hidden cursor-pointer group'>
            <div className='w-full '>
              <img className='w-full h-80 object-cover' src={movie.hinhAnh} alt={movie.tenPhim} />
            </div>
            

            <div className='flex flex-col py-3  transition-all duration-100 group-hover:hidden'>
              <div className='pb-3 flex items-center gap-3'>
                <span className='text-white bg-red-500 p-1 rounded'>C18</span>
                <h1 className='font-bold text-sky-500'>{movie.tenPhim}</h1>
              </div>
              <div className='pb-3 flex items-center gap-3'>
             
                <div><span className='text-black font-bold'>Bắt đầu: </span><span className='text-orange-500'>{moment(movie.ngayKhoiChieu).utcOffset(7 * 60).format('dddd,DD MM YYYY, h:mm:ss ')}</span></div>
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


     <Pagination listMovies={listMovies}  setMoviePerPage={setMoviePerPage} curentPage={curentPage} setCurrentPage={setCurrentPage}/>
       
    </div>
    </div>
  );
}

export default ListMovie;
