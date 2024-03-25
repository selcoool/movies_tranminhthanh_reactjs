import React, { useEffect, useState } from 'react'
import { api_movies } from '../services/api_movies';
import { FaStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import moment from 'moment';
import 'moment/locale/vi';
import Modal from './Modal';
import ModalMovie from './ModalMovie';

function DetailMovie({tenPhim}) {
    console.log('pppp',tenPhim)

    const [toggleStateInfor, setToggleStateInfor] = useState(0);
    const [detailMovie,setDetailMovie]=useState()
    const [isOpen, setIsOpen] = useState(false);
    console.log('detailMovie',detailMovie)


     const stars=[
        {
            sao:1
        },
        {
            sao:2
        },
        {
            sao:3
        },
        {
            sao:4
        },
        {
            sao:5
        },

     ]
    const informations=[
        {
          name:"Thời gian"
        },
        {
          name:"Chi tiết"
        },
        {
          name:"Đánh giá"
        }
    
      ]


    useEffect(() => {
        api_movies.getAMovie(tenPhim)
          .then((data) => {
            console.log('ppppxxxx',data.data.content)
            setDetailMovie(data.data.content)
          
          })
          .catch((err) => {
            console.log('error', err);
          });
      }, [tenPhim]);

  return (
    <div className=' mt-8'>
    <div className='w-full h-full   flex flex-col justify-center items-center '>
     

    {detailMovie?.slice(0, 1).map((movie,index)=>{
            return (

                <div className='flex  lg:flex-row flex-col justify-center items-center mx-8'>

      
                <div className='w-2/6'>
                     <div className='w-full h-full'>
                       <div className='flex justify-center items-center relative'>
                       
                        <img className='object-cover min-w-[450px] lg:min-w-[320px] ' src={movie.hinhAnh}/>
                      
                       
                       <div className='absolute   text-white text-8xl' onClick={()=>setIsOpen(!isOpen)}><FaRegCirclePlay/></div>
                 
                       </div>
                     </div>
                </div>
           
                <div className='w-4/6 flex flex-col'>
                   <div className='w-full'>
                      
                       <h1 className='text-2xl lg:text-4xl lg:py-12 text-center text-red-600 font-bold'>{movie.tenPhim}</h1>
                       <div className='px-4 line-clamp-2 lg:line-clamp-6'>
                       {movie.moTa}
           
                       </div>
           
           
                   </div>
           
                   <div  className='w-full  mt-4 mx-2  bg-orange-400'>
                       <div className='w-full p-2 '>
                           <div className='flex  pt-2 gap-[1px]'>
                           {informations.map((information,IndexInformation)=>{
                                   return (
           
                              <div className='text-sm p-2 bg-red-300 hover:bg-red-500 relative cursor-pointer'onClick={()=>setToggleStateInfor(IndexInformation)}>
                               {information.name}
                               
                               {toggleStateInfor === IndexInformation && (
                                       <div className='absolute  h-1 w-full bg-red-500  right-0 bottom-0'> </div>
                                       )}
                               </div>
           
                              )
                           })}
                           </div>
                           <div className='flex flex-col bg-slate-200'>
                              <div className={`p-4 ${toggleStateInfor===0 ? '' :'hidden'} cursor-pointer`}>
                                   <div className='flex flex-col'>
                                    <div><span className='font-bold'>Chiếu lúc: </span>{moment(movie.ngayKhoiChieu).utcOffset(7 * 60).format(' h:mm:ss ')}</div>
                                    <div><span  className='font-bold'>Ngày: </span>{moment(movie.ngayKhoiChieu).utcOffset(7 * 60).format('DD MM YYYY')}</div>
                                   </div>
                                 
                              </div>
                              <div className={`p-4 ${toggleStateInfor===1 ? '' :'hidden'} cursor-pointer`}>{movie.moTa}</div>
                              <div className={`p-4 ${toggleStateInfor===2 ? '' :'hidden'} cursor-pointer`}>
                                <div className='flex flex-row items-center '> <span  className='font-bold'>Rate:</span>
                                    {
                                      stars?.map((star,indexStart)=>{
                                          return(
                                            <FaStar className='text-orange-400 hover:text-yellow-500'/>
                                          )
                                      })
                                    }
                              </div>
                              </div>
                               
                           </div>
                       </div>
                      
                   </div>
                </div>
                <ModalMovie isOpen={isOpen} setIsOpen={setIsOpen}  tenPhim={movie.tenPhim} />
           
                {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} maPhim={movie.maPhim} /> */}
                </div>
                
            )
    })}

  


    </div>
    </div>
  )
}

export default DetailMovie
