import React from 'react';
import moment from 'moment';
import 'moment/locale/vi';

function ManagementMovie({ listMovies,setOpenMenuEditMovie,setOpenMenuDeleteMovie,setDeletMovie,setEditMovie}) {



    
    // console.log('listMovies', listMovies);
    return (
      
                    <table className="border border-collapse border-gray-300 w-full shadow-gray-400 shadow-md  ">                    
                        <thead>
                            <tr>
                                <th className="border border-gray-950 p-0.5 text-center">Ảnh</th>
                                <th className="border border-gray-950 p-0.5 text-center">Tên Phim</th>
                                <th className="border border-gray-950 p-0.5 text-center">Mô tả</th>
                                <th className="border border-gray-950 p-0.5 text-center">Chi tiết</th>
                                <th className="border border-gray-950 p-0.5 text-center">Chỉnh sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listMovies?.map((listMovie, indexListMovie) => {
                                return (
                                    <tr key={indexListMovie}>
                                        <td className="border border-gray-950 text-center min-w-40 min-h-40"><img src={listMovie.hinhAnh} alt={listMovie.hinhAnh} /></td>
                                        <td className="border border-gray-950 text-center">{listMovie.tenPhim}</td>
                                        <td className="border border-gray-950 text-center"><p className='line-clamp-4'>{listMovie.moTa}</p></td>
                                        <td className="border border-gray-950 text-center ">
                                            <div className='flex flex-col justify-start w-full h-full'>
                                                <div>{listMovie.biDanh}</div>
                                                <div>{listMovie.danhGia}</div>
                                                <div>{listMovie.maNhom}</div>
                                                <div>{listMovie.maPhim}</div>
                                                <div>{moment(listMovie.ngayKhoiChieu).format('DD/MM/YYYY')}</div>
                                            </div>
                                        </td>
                                        <td className="border border-gray-950 ">
                                            <div className='w-full h-full flex justify-center items-center gap-1'>
                                                <div className='bg-yellow-400 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer' onClick={()=>[setOpenMenuDeleteMovie(true),setDeletMovie(listMovie.maPhim)]}> Xóa</div> 
                                                <div className='bg-cyan-400 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer' onClick={()=>[setOpenMenuEditMovie(true),setEditMovie(listMovie)]}> Sửa</div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
        
    )
}

export default ManagementMovie;
