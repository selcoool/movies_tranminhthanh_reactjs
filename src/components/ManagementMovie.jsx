import React from 'react'

function ManagementMovie({listMovies}) {
    console.log('listMovies',listMovies)
  return (
    <div className='w-full h-full'>
            <h1 className='text-4xl text-center text-cyan-500  py-4'>Quản Lý Phim</h1>
           <div>
               
           <div className='w-full flex flex-col items-center justify-center '>
                                    <table className="border border-collapse border-gray-300 w-full shadow-gray-400 shadow-md">
                                        <thead>
                                            <tr>
                                            <th className="border border-gray-950 p-0.5 text-center">Ảnh</th>
                                               <th className="border border-gray-950 p-0.5 text-center">Tên Phim</th>
                                                <th className="border border-gray-950 p-0.5 text-center">Trailer</th>
                                                <th className="border border-gray-950 p-0.5 text-center">Mô tả</th>
                                                <th className="border border-gray-950 p-0.5 text-center">Chi tiết</th>
                                                <th className="border border-gray-950 p-0.5 text-center">Chỉnh sửa</th>
                                            </tr>
                                        </thead>

                                       
                                        <tbody>

                                             {listMovies?.map((listMovie,indexListMovie)=>{
                                                return ( 
                                                        <tr key={indexListMovie}>
                                                    <td className="border border-gray-950  text-center"><img src={listMovie.hinhAnh} alt={listMovie.hinhAnh}/></td>
                                                    <td className="border border-gray-950  text-center">{listMovie.tenPhim}</td>
                                                    <td className="border border-gray-950  text-center"><a href={listMovie.trailer}>{listMovie.trailer}</a></td>
                                                    <td className="border border-gray-950 text-center "><p className='line-clamp-4'>{listMovie.moTa}</p></td>

                                                   
                                                    <td className="border border-gray-950 text-center">
                                                   
                                                            <ul className='w-full h-full'>
                                                                <li>{listMovie.biDanh}</li>
                                                                <li>{listMovie.danhGia}</li>
                                                                <li>{listMovie.maNhom}</li>
                                                                <li>{listMovie.maPhim}</li>
                                                                <li>{listMovie.ngayKhoiChieu}</li>
                                                            </ul>
                                                      

                                                    </td>
                                                    <td className="border border-gray-950 ">
                                                         <div className='w-full h-full flex  justify-center items-center gap-1'>
                                                            <div className='bg-red-600 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500  hover:scale-110 cursor-pointer'> Xóa</div>
                                                            <div className='bg-yellow-400 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer'> Thêm</div>
                                                            <div className='bg-blue-600 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer'> Sửa</div>
                                                                     
                                                        </div>
                                                  
                                                    </td>
                                                   
                                                </tr>
                                                )
                                            })} 
  
       

                                        </tbody>
                                </table>

                                    
                                </div>

           </div>
    </div>
  )
}

export default ManagementMovie
