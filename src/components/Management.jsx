import React, { useState } from 'react'

function Management() {

  const [toggleStateMenu, setToggleStateMenu] = useState(0);
 

  const Links=[
    {
      name:"Tổng quan"
    },
    {
      name:"Người dùng"
    },
    {
      name:"Phim"
    }

  ]

  return (
    <>
    <div className=' w-full h-full flex flex-col justify-center items-center'>
        <div className='flex w-full h-full'>
             <div className='w-2/5 lg:w-1/6  h-full bg-slate-400 '>
                   <div className='flex gap-2 items-center p-4'>
                      <div >
                        <img className='w-14 h-14 rounded-full' src="https://tse1.mm.bing.net/th?id=OIP.OF59vsDmwxPP1tw7b_8clQHaE8&pid=Api&P=0&h=220" alt='ccc'/>
                      </div>
                      <div className='flex flex-col'>
                         <h1 className='text-white'>Tran Minh Thanh</h1>
                         <div className='flex gap-2'><span className='text-cyan-700 cursor-pointer text-sm hover:text-white'>Đăng nhập</span> <span className='text-cyan-700 cursor-pointer text-sm hover:text-white'>Đăng xuất</span></div>
                      </div>
                   </div>
                    <div className='flex flex-col py-4 gap-1'>

                      {Links.map((link,indexLink)=>{
                        return (
                          <div className={`p-4 bg-slate-200 hover:bg-slate-50 ${toggleStateMenu === indexLink ? 'bg-blue-200':''} cursor-pointer relative`} onClick={()=>setToggleStateMenu(indexLink)}>
                            <div className='h-full w-full'>
                            {link.name}
                            </div>
                            {toggleStateMenu === indexLink && (
                            <div className='absolute  h-full w-1 bg-blue-600  right-0 bottom-0'> </div>
                            )}
                          </div>
                        )
                      })}
                     
                    </div>
             </div>
             <div  className='w-3/5 lg:w-5/6 h-full bg-orange-200 '>
                     <div className='flex flex-col'>

                  
                        <div className={`p-4  h-screen w-full shadow-lg ${toggleStateMenu===0 ? '' :'hidden'} cursor-pointer`}>Tổng quan</div>
                        <div className={`p-4  h-screen w-full shadow-lg  ${toggleStateMenu===1 ? '' :'hidden'} cursor-pointer`}>Người dùng</div>
                        <div className={`p-4  h-screen w-full shadow-lg ${toggleStateMenu===2 ? '' :'hidden'} cursor-pointer`}>Sản phẩm</div>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Management

