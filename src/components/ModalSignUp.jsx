import React, { useEffect } from 'react';
import { api_movies } from '../services/api_movies';

function ModalSignUp({ isOpen, setIsOpen}) {
    console.log('isOpen', isOpen);
    // console.log('maPhim', maPhim);
   
    const handleCloseModal = (e) => {
        if (e.target.id === "wrapper") {
            setIsOpen(false)
        }
    }


    // useEffect(() => {
    //     api_movies.getAllMovies()
    //       .then((data) => {
    //         // setSlides(data.data.content);
    //         // console.log('data.data m', data.data.content.items);
    //        const currentFilm =data.data.content.items.filter((movies)=>{
    //          return movies.maPhim==maPhim;
    //        })

    //        console.log('currentFilm',currentFilm);
    //       })
    //       .catch((err) => {
    //         console.log('error', err);
    //       });
    //   }, []);


    return (
        <>
             {isOpen ? (

            <div id='wrapper' onClick={handleCloseModal} className='fixed z-10 flex justify-center items-center w-full h-full'>
                <div className='w-fit h-fit mr-4'>
                 

                    <div className='w-fit h-fit bg-orange-500 px-4 shadow-md shadow-slate-400 rounded-lg'>
                            <div className='flex h items-center justify-center gap-3 relative'>
                               <div className='absolute font-bold text-white right-0 top-1' onClick={()=>setIsOpen(!isOpen)}>X</div>
                            </div>
                            
                           <div className='flex flex-col gap-3 pb-3 pt-12'>
                            <div className='flex items-center justify-center gap-3'>
                                <label className='min-w-[140px] '>Tên:</label>
                                <input type='text' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập tên người dùng' />
                            </div>


                            <div className='flex items-center justify-center gap-3'>
                                <label className=' min-w-[140px]'>Mật khẩu:</label>
                                <input type='text' className=' flex-1 focus:outline-none p-1  rounded-lg cursor-pointer' placeholder='Nhập mập khẩu' />
                            </div>


                            <div className='flex items-center justify-center gap-3'>
                                <label className=' min-w-[140px]'>Xác nhận mật khẩu</label>
                                <input type='text' className=' flex-1 focus:outline-none p-1  rounded-lg cursor-pointer'   placeholder='Nhập mập khẩu'/>
                            </div>


                            <div className='flex items-center justify-end gap-3'>
                                <div className=' min-w-[60px] w-20 h-[34px] bg-red-600 flex justify-center items-center hover:shadow-md hover:shadow-gray-300 cursor-pointer hover:text-white hover:scale-105 '>Đăng ký</div>
                            </div>


                        </div>


                    </div>





                </div>
            </div>

) : null}



            {/* 
            {isOpen ? (
                <div id='wrapper' onClick={handleCloseModal} className='fixed z-10 flex justify-center items-center w-full h-full'>
                      <div className='w-fit h-fit mr-4 bg-slate-100'>
                            <iframe
                        className="lg:w-[750px] lg:h-[400px] w-full h-full"
                        src={`https://www.youtube.com/embed/EX6clvId19s`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                            ></iframe>
                      </div>
                </div>
            ) : null} */}
        </>
    );
}

export default ModalSignUp;