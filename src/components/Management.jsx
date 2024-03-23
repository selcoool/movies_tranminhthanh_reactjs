import React from 'react'

function Management() {
  return (
    <>
    <div className=' w-full h-full flex flex-col justify-center items-center'>
        <div className='flex w-full h-full'>
             <div className='w-1/6 bg-slate-400 '>
                   <div className='flex gap-2 items-center p-4'>
                      <div >
                        <img className='w-14 h-14 rounded-full' src="https://tse1.mm.bing.net/th?id=OIP.OF59vsDmwxPP1tw7b_8clQHaE8&pid=Api&P=0&h=220" alt='ccc'/>
                      </div>
                      <div className='flex flex-col'>
                         <h1 className='text-white'>Tran Minh Thanh</h1>
                         <div className='flex gap-2 text-cyan-700 cursor-pointer'><span>Đăng nhập</span> <span>Đăng xuất</span></div>
                      </div>
                   </div>
                    <div className='flex flex-col py-4 gap-1'>
                        <div className='p-4 bg-white hover:bg-orange-50 cursor-pointer'>Tổng quan</div>
                        <div className='p-4 bg-white hover:bg-orange-50 cursor-pointer'>Người dùng</div>
                        <div className='p-4 bg-white  hover:bg-orange-50 cursor-pointer'>Sản phẩm</div>
                    </div>
             </div>
             <div  className='w-5/6 bg-slate-500'>
                     <div className='flex flex-col'>
                        <div className='p-4  h-screen w-full bg-orange-200 cursor-pointer'>Tổng quan</div>
                        {/* <div className='p-4 bg-white hover:bg-orange-200 cursor-pointer'>Người dùng</div>
                        <div className='p-4 bg-white  hover:bg-orange-200 cursor-pointer'>Sản phẩm</div> */}
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Management

