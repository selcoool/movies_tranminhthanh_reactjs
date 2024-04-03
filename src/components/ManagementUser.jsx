import React from 'react'

function ManagementUser() {
  return (
    <div className='w-full h-full'>
           <h1 className='text-4xl text-center text-cyan-500  py-4'>Quản Lý Người Dùng</h1>
           <div>
               
           <div className='w-full flex flex-col items-center justify-center overflow-x-auto no-scrollbar'>
                                    <table className="border border-collapse border-gray-300 w-full shadow-gray-400 shadow-md">
                                        <thead>
                                            <tr>
                                               <th className="border border-gray-950 p-0.5 text-center">Họ Tên</th>
                                                <th className="border border-gray-950 p-0.5 text-center">Tài Khoản</th>
                                                <th className="border border-gray-950 p-0.5 text-center">Email</th>
                                                <th className="border border-gray-950 p-0.5 text-center">SĐT</th>
                                                <th className="border border-gray-950 p-0.5 text-center">Chỉnh Sửa</th>
                                            </tr>
                                        </thead>

                                       
                                        <tbody>

                                            {/* {bookTickets?.map((bookTicket,indexBookTickets)=>{
                                                return ( */}
                                                        <tr>
                                                    <td className="border border-gray-950  text-center">1</td>
                                                    <td className="border border-gray-950  text-center">2</td>
                                                    <td className="border border-gray-950 text-center">3</td>
                                                    <td className="border border-gray-950 text-center">4</td>
                                                    <td className="border border-gray-950 ">
                                                        <div className='w-full h-full flex  justify-center items-center gap-1'>
                                                            <div className='bg-red-600 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500  hover:scale-110 cursor-pointer'> Xóa</div>
                                                            <div className='bg-yellow-400 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer'> Thêm</div>
                                                            <div className='bg-blue-600 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer'> Sửa</div>
                                                                     
                                                        </div>
                                                  
                                                    </td>
                                                   
                                                </tr>
                                                {/* )
                                            })} */}
  
       

                                        </tbody>
                                </table>

                                    
                                </div>

           </div>
    </div>
  )
}

export default ManagementUser
