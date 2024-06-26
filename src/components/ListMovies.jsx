import React, { useEffect, useState } from 'react';
import { api_movies } from '../services/api_movies';
import { FaRegCirclePlay } from "react-icons/fa6";
import ModalMovie from './ModalMovie';
import Pagination from './Pagination';
import ModalSearchMovie from './ModalSearchMovie';
import moment from 'moment';
import 'moment/locale/vi';
import { Link } from 'react-router-dom';



function ListMovie() {
  const [listMovies, setListMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // const [maPhim, setMaPhim] = useState();

  const [tenPhim, setTenPhim] = useState();
  const [tuNgay, setTuNgay] = useState('2024-10-10');
  const [denNgay, setDenNgay] = useState('2024-12-12');
  const [dataSearch,setDataSearch]= useState();
  const [isOpenSearchMovie, setIsOpenSearchMovie]=useState(false);
    
 
  const [curentPage, setCurrentPage] = useState(1);
  const [moviePerPage, setMoviePerPage] = useState(8);

//  console.log('tenPhim',tenPhim)


 
  // console.log('listMovies',listMovies.items)

//   console.log('handleTenPhim',tenPhim)
//  console.log('handleTuNgay',moment(tuNgay).format('DD/MM/YYYY'))
//   console.log('handleDenNgay', moment(denNgay).format('DD/MM/YYYY'))


  const handleFind=()=>{
        
// console.log('tenPhim',tenPhim.trim())
// console.log("moment(tuNgay).format('DD/MM/YYYY')",moment(tuNgay).format('DD/MM/YYYY'))
// console.log("moment(denNgay).format('DD/MM/YYYY')",moment(denNgay).format('DD/MM/YYYY'))


      api_movies.searchAllMovies(tenPhim,moment(tuNgay).format('DD/MM/YYYY'), moment(denNgay).format('DD/MM/YYYY'))
  
         
  
      .then((data) => {
      console.log('data111', data.data.content);
      setDataSearch(data.data.content);
    })
    .catch((err) => {
      console.log('error', err);
    });


  }

 
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
    <div id='lich_chieu' >
    <div className='dark:bg-slate-500 w-full h-full  flex flex-col justify-center items-center  relative'>

     <div className=' flex flex-col justify-center items-center my-3'>

<div className='w-fit h-fit bg-orange-500 px-4 shadow-md shadow-slate-400 rounded-lg'>
<div className='flex md:flex-row flex-col gap-3 py-2'>


     
     
      <div className='flex items-center justify-center gap-3'>
      <label className='lg:min-w-[70px] md:min-w-[25px] min-w-[60px] '>Phim</label>
       <input className='md:flex-1 flex-1 focus:outline-none px-2 p-1 cursor-pointer' onChange={(e)=> setTenPhim(e.target.value)} name='tenPhim' type='text' placeholder='Nhập tên phim'/>
      </div>
   

     <div className='flex items-center justify-center gap-3'>
       <label className='lg:min-w-[50px] md:min-w-[10px] min-w-[60px]'>Từ</label>
       <input className=' md:flex-1 flex-1 focus:outline-none p-1 cursor-pointer' defaultValue={tuNgay}  onChange={(e)=> setTuNgay(e.target.value)} name='tuNgay' type='date'   />
     </div>


     <div className='flex items-center justify-center gap-3'>
     <label className='lg:min-w-[50px] md:min-w-[10px] min-w-[60px]'>Đến</label>
   <input className='md:flex-1  flex-1 focus:outline-none p-1 cursor-pointer' defaultValue={denNgay}   onChange={(e)=> setDenNgay(e.target.value)} name='denNgay' type='date' />
     </div>


     <div className='flex items-center justify-end gap-3'>
     <div onClick={()=>[handleFind(),setIsOpenSearchMovie(!isOpenSearchMovie)]} className='lg:min-w-[50px] min-w-[50px] w-20 h-[34px] bg-slate-400 flex justify-center items-center hover:shadow-md hover:shadow-gray-300 cursor-pointer text-white  hover:scale-105 rounded-tr-xl rounded-bl-xl '>Tìm kiếm</div>
     </div>
    

     </div>
 
   
     </div>





<ModalSearchMovie isOpenSearchMovie={isOpenSearchMovie} setIsOpenSearchMovie={setIsOpenSearchMovie} dataSearch={dataSearch} />





     </div>




      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 px-20'>
        {listMovies.items?.map((movie) => (
          
          <div key={movie.maPhim} className='relative overflow-hidden cursor-pointer group'>
           
            <div className='w-full shadow-lg shadow-slate-400 '>
              <img className='w-full h-80 object-cover' src={movie.hinhAnh} alt={movie.tenPhim} />
            </div>
          
            

            <div className='flex flex-col py-3  transition-all duration-100 group-hover:hidden'>
              <div className='pb-3 flex items-center gap-3'>
                <span className='text-white bg-red-500 p-1 rounded'>{movie.maPhim}</span>
                <h1 className='font-bold text-sky-500'>{movie.tenPhim}</h1>
              </div>
              <div className='pb-3 flex items-center gap-3'>
             
                <div><span className='text-black font-bold'>Bắt đầu: </span><span className='text-orange-500'>{moment(movie.ngayKhoiChieu).utcOffset(7 * 60).format('dddd,DD MM YYYY, h:mm:ss ')}</span></div>
              </div>
              <p className='line-clamp-2'>{movie.moTa}</p>
            </div>

         
            <div className='absolute w-full h-full transition-all duration-100 top-0 flex-col py-3 hidden group-hover:flex gap-1'>
       
              <div className='absolute top-28 w-full flex justify-center items-center' onClick={()=>[setIsOpen(!isOpen),setTenPhim(movie.tenPhim)]}>
                <FaRegCirclePlay className='text-white' size={60} />
              </div>
            
              <Link to={`/detail/${movie.tenPhim}`} onClick={()=>setTenPhim(movie.tenPhim)}>
              <div className='absolute w-full bottom-20 p-3 bg-sky-500 text-white text-center'>CHI TIẾT</div>
              </Link>
              <Link to={`/theater`}>
              <div className='absolute w-full bottom-4 p-3 bg-red-500 text-white text-center'>ĐẶT VÉ</div>
              </Link>
              
            </div>

          

          

           
          </div>
          
           
        ))}

     <ModalMovie isOpen={isOpen} setIsOpen={setIsOpen}  tenPhim={tenPhim} />
      </div>


     <Pagination listMovies={listMovies}  setMoviePerPage={setMoviePerPage} curentPage={curentPage} setCurrentPage={setCurrentPage}/>
       
    </div>
    </div>
  );
}

export default ListMovie;
