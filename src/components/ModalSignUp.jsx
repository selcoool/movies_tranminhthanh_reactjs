import React, { useEffect } from 'react';
import { api_movies } from '../services/api_movies';

function ModalSignUp({ isOpen, setIsOpen}) {
    // console.log('isOpen', isOpen);
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
                <div className='w-fit h-fit '>
                 

                    <div className='w-fit h-fit bg-red-500 px-4 shadow-md shadow-slate-400 rounded-lg'>
                            <div className='flex  items-center justify-center gap-3 relative'>
                               <div className='absolute font-bold text-white right-0 top-1 hover:text-black cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>X</div>
                            </div>
                            
                            <h1 className='text-center mt-6 text-2xl text-white font-bold'>Thông Tin Đăng Ký</h1>
                            
                            <div className='flex flex-col gap-3 pb-3 pt-5'>
                            <div className='flex items-center justify-center gap-1'>
                                <label className=' min-w-[90px]'>Tên:</label>
                                <input type='text' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập tên người dùng' />
                            </div>


                            <div className='flex items-center justify-center gap-1'>
                                <label className='min-w-[90px]'>Mật khẩu:</label>
                                <input type='text' className=' flex-1 focus:outline-none p-1  rounded-lg cursor-pointer' placeholder='Nhập mập khẩu' />
                            </div>


                            <div className='flex items-center justify-center gap-1'>
                                <label className=' min-w-[90px]'>Mật khẩu:</label>
                                <input type='text' className=' flex-1 focus:outline-none p-1  rounded-lg cursor-pointer'   placeholder='Nhập mập khẩu'/>
                            </div>


                            <div className='flex items-center justify-end gap-3'>
                                <div className=' min-w-[60px] w-20 h-[34px] bg-green-500 flex justify-center rounded-md items-center hover:shadow-md hover:shadow-gray-300 cursor-pointer hover:text-white hover:scale-105 '>Đăng ký</div>
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