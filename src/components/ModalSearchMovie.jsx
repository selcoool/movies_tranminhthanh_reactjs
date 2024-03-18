

import React from 'react';

function ModalSearchMovie({ isOpenSearchMovie, setIsOpenSearchMovie, dataSearch }) {
  return (
    <div>
      {isOpenSearchMovie && dataSearch?.length>=1 ? (
     
     <div className='w-full h-full bg-orange-500 flex items-center justify-center '>
     <div className='bg-green-300 absolute h-fit  w-[350px] lg:w-[550px] top-[6%] lg:top-[10%] z-20'>
       <div className='flex flex-col gap-1 bg-red-400 relative'>
         <div className='absolute right-3 top-1 text-lg text-white font-bold cursor-pointer'onClick={()=>setIsOpenSearchMovie(!isOpenSearchMovie)}>x</div>
        
         
         {dataSearch?.map((mv) => (
           <div className='flex justify-center items-center'>
             <div className='w-3/5 relative'>
                <img className='object-cover' src={mv.hinhAnh}/>
                <div className='absolute top-0 left-0 flex items-center justify-center'>
                 <span className='p-2 bg-red-500'>{mv.maPhim}</span>
                 </div>
            </div>
             <div className='w-2/5 flex items-center justify-center'>
               <h1>{mv.tenPhim}</h1>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>


     
      ) : null}
     
    </div>
  );
}

export default ModalSearchMovie;
