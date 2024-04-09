import React, { useEffect, useState } from 'react'
import { api_movies } from '../services/api_movies';
import ModalMovie from './ModalMovie';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import ModalSignIn from './ModalSignIn';

function ListSeats() {

    const {maLichChieu}=useParams()
    // console.log('maLichChieu', maLichChieu)
    const [bookTickets, setBookTickets] = useState([])
    const [danhSachGhe, setDanhSachGhe] = useState([])
    const [thongTinPhim, setThongTinPhim] = useState([])


    const [openMenuSignIn,setOpenMenuSignIn]=useState(false)
  
    console.log('openMenuSignIn', openMenuSignIn)
    // console.log('thongTinPhim', thongTinPhim)
    // console.log('bookTickets', bookTickets)

    useEffect(() => {
        api_movies.getAllSeats(maLichChieu)
            .then((data) => {

                // console.log('data.data.content', data.data.content);

                setDanhSachGhe(data.data.content.danhSachGhe)
                setThongTinPhim(data.data.content.thongTinPhim)
            })
            .catch((err) => {
                console.log('error', err);
            });
            setBookTickets([])
    }, [maLichChieu]);

    return (
        <div className='dark:bg-slate-500 pb-8'>
            <div className=' w-full h-full flex lg:flex-row flex-col justify-center items-center px-8 gap-2'>



                <div className='lg:w-2/5 w-full  h-full flex-col'>


                    <div className='flex flex-col pt-11'>
                      
                        <div className='flex justify-center max-h-[300px] '>
                            <img className='object-cover w-100  h-100' src={thongTinPhim.hinhAnh} alt="" />
                                        
                         
                        </div>
                        <div>
                            <h1 className='font-bold text-blue-700 text-3xl text-center py-2'>{thongTinPhim.tenPhim}</h1>
                        </div>
                        <div>
                            <span className='font-bold'>Thời gian: </span><span className='font-bold text-sky-500'>{thongTinPhim.gioChieu} - {thongTinPhim.ngayChieu}</span>
                        </div>
                        <div>
                            <span className='font-bold'>Rạp: </span><span className='text-orange-500'> {thongTinPhim.tenRap}</span>
                        </div>
                        <div>
                            <span className='font-bold'>Địa chỉ: </span><span className='text-stone-700'> {thongTinPhim.diaChi}</span>
                        </div>
                    </div>



                    <div className='pt-4'>

                                <div className='w-full flex flex-col items-center justify-center'>
                                    <table className="border border-collapse border-gray-300 w-full">
                                        <thead>
                                            <tr>
                                               <th className="border border-gray-300 p-2">Loại</th>
                                                <th className="border border-gray-300 p-2">Rạp</th>
                                                <th className="border border-gray-300 p-2">Ghế</th>
                                                <th className="border border-gray-300 p-2">Giá</th>
                                            </tr>
                                        </thead>

                                       
                                        <tbody>

                                            {bookTickets?.map((bookTicket,indexBookTickets)=>{
                                                return (
                                                        <tr>
                                                    <td className="border border-gray-300 text-violet-700 p-2 text-center">{bookTicket?.loaiGhe}</td>
                                                    <td className="border border-gray-300 p-2 text-center">{bookTicket?.maRap}</td>
                                                    <td className="border border-gray-300 p-2 text-center">{bookTicket?.tenGhe}</td>
                                                    <td className="border border-gray-300 text-red-600 p-2 text-center"> {bookTicket?.giaVe.toLocaleString('vi-VN')}</td>
                                                   
                                                </tr>
                                                )
                                            })}
  
       

                                        </tbody>
                                </table>

                                    <div className='bg-red-600 shadow-md shadow-slate-600 p-4 mt-4 rounded-md hover:text-white hover:bg-red-500 cursor-pointer' onClick={()=>setOpenMenuSignIn(!openMenuSignIn)}> ĐẶT VÉ NGAY</div>
                                </div>


                    </div>

                </div>


                <div className='lg:w-3/5  w-full h-full flex flex-col  '>

                    <div className='flex flex-col justify-center items-center lg:px-10 '>

                        <h1 className='text-center pt-10 pb-4 text-3xl text-red-600 font-bold'>Danh sách ghế</h1>



                        <div className='w-full h-full grid grid-cols-10 gap-2'>
                            {danhSachGhe?.map((ghe, indexGhet) => {
                                return (<div onClick={()=>setBookTickets([...bookTickets,ghe])} className="border shadow-zinc-500 shadow-md rounded-full bg-orange-500 border-gray-300 flex justify-center items-center  py-2 px-3 text-center hover:scale-105 hover:bg-orange-400/90 cursor-pointer">{ghe.tenGhe}</div>)
                            })}


                        </div>
                    </div>

                </div>


            </div>


            <ModalSignIn  isOpen={openMenuSignIn} setIsOpen={setOpenMenuSignIn}  />


          
           



        </div>
    )
}

export default ListSeats
