import React, { useEffect } from 'react';
import { api_movies } from '../services/api_movies';

function ModalDeleteUser({ isOpen, setIsOpen}) {
    // console.log('isOpen', isOpen);
    // console.log('deletMovie', deletMovie);
    

    const handleCloseModal = (e) => {
        if (e.target.id === "wrapper") {
            setIsOpen(false)
        }
    }



    return (
        <>
             {isOpen ? (

            <div id='wrapper' onClick={handleCloseModal} className='fixed z-10 flex justify-center items-center w-full h-full'>
                <div className='w-fit h-fit '>
                 

                    <div className='w-fit h-fit bg-red-500 px-4 shadow-md shadow-slate-400 rounded-lg'>
                            <div className='flex h items-center justify-center gap-3 relative'>
                               <div className='absolute font-bold text-white right-0 top-1  hover:text-black cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>X</div>
                            </div>

                            <h1 className='text-center mt-6 text-2xl text-white font-bold'>Xóa Phim</h1>
                            
                           <div className='flex flex-col gap-3 pb-3 pt-5'>
                          

                           <div className='flex items-center justify-center gap-3'>
                                Bạn có thật sự muốn xóa người dùng này không ?
                            </div> 


                            <div className='flex items-center justify-end gap-3'>
                                <div className=' min-w-[90px] w-30 h-[34px] bg-green-500 flex justify-center rounded-md items-center hover:shadow-md hover:shadow-gray-300 cursor-pointer hover:text-white hover:scale-105 '>Xóa</div>
                            </div>


                        </div>


                    </div>





                </div>
            </div>

) : null}



          
        </>
    );
}

export default ModalDeleteUser;