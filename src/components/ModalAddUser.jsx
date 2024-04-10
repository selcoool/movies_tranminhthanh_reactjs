import React, { useEffect, useState } from 'react';
import { api_movies } from '../services/api_movies';
import { useFormik } from 'formik';
// import { basicSchema } from '../schemas';
import * as yup from "yup"
import { api_users } from '../services/api_users';


function ModalAddUser({ isOpen, setIsOpen}) {
    console.log('isOpen', isOpen);
    // console.log('maPhim', maPhim);
    const [getFile, setGetFile] = useState()
    const [date, setDate] = useState('10/10/2020')

   

    // const formData = new FormData();
    // formData.append('file', getFile);
    // console.log('jjjjjjjjjjjj',formData)

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

    function handleCreateAMovie(Movie){
            api_movies.createAMovie(Movie)
          .then((data) => {
    
           console.log('data',data);
          })
          .catch((err) => {
            console.log('error', err);
          });
    }

    const { handleChange, handleSubmit, handleBlur, resetForm, values, errors, touched,setFieldValue } = useFormik({
        initialValues: {
          taiKhoan: "",
          matKhau:"",
          email:"",
          soDt:"",
          maNhom:"GP04",
          hoTen:"",

        },
        validationSchema: yup.object().shape({
        taiKhoan: yup.string().required("Vui lòng nhập tên tài khoản"),
        matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
    
        email: yup.string().required("Vui lòng nhập email"),
        soDt:yup.string().required("Vui lòng nhập số điện thoại"),
        hoTen:yup.string().required("Vui lòng nhập họ tên")
        
    
    
        }),
        onSubmit: async(values) => {
          try {

            console.log('valuexxxxxxxxxxxxxxxxxxxxx', values);
            //   handleCreateAMovie(value)
            //   console.log('typeof', typeof value.file);
            //   console.log('action', action);
        
              // actions.resetForm();
            //  let formData = new FormData();
            //  for (let key in values){
            //     if(key=='hinhAnh'){
            //         formData.append('File',values[key]);
            //     }else{
            //         formData.append(key,values[key]);
            //     }
                
            //   }
            let formData = new FormData();
              for (let key in values){
                console.log('values[key]',values[key])
                    formData.append(key,values[key]);
                
              }
              console.log('formData',formData)
                 const res=await api_users.createAUser(formData)

            
            
          } catch (error) {
              console.log('error',error)
          }
        }
      });
    
      console.log('values', values)
      console.log('errors', errors)
      console.log('touched', touched);



      const [formattedDate, setFormattedDate] = useState('');

  const handleChangeDate = (event) => {
    const date = event.target.value;
    if (date) {
      const [month, day, year] = date.split('-');
      setFormattedDate(`${day}/${month}/${year}`);
    } else {
      setFormattedDate('');
    }
  };


    return (
        <>
             {isOpen ? (

            <div id='wrapper' onClick={handleCloseModal} className='fixed z-10 flex justify-center items-center w-full h-full'>
                <div className='w-fit h-fit pt-4 '>
                 

                    <form onSubmit={handleSubmit} className='w-fit h-fit bg-red-500 px-4 shadow-md shadow-slate-400 rounded-lg '>
                            <div className='flex h items-center justify-center gap-3 relative'>
                               <div className='absolute font-bold text-white right-0 top-1  hover:text-black cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>X</div>
                            </div>

                            <h1 className='text-center mt-6 pb-2 text-2xl text-white font-bold'>Thông Tin Người Dùng</h1>
                            
                           <div className='flex flex-col gap-3 pb-5 pt-5 max-h-[400px] max-w-[300px] overflow-auto no-scrollbar '>
                            
                        
                            <div className='flex items-center justify-center gap-3'>
                                <label >Tài khoản:</label>
                                <input onChange={handleChange} onBlur={handleBlur} id='taiKhoan'value={values.taiKhoan} type='text'  className=' flex-1  focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập tên tài khoản' />
                            </div>
                            {errors.taiKhoan && touched.taiKhoan ? (<div className='text-white '>{errors.taiKhoan}</div>) : ''}


                            <div className='flex items-center justify-center gap-3'>
                                <label >Họ tên:</label>
                                <input onChange={handleChange} onBlur={handleBlur} id='hoTen'value={values.hoTen} type='text'  className=' flex-1  focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập tên tài khoản' />
                            </div>
                            {errors.hoTen && touched.hoTen ? (<div className='text-white '>{errors.hoTen}</div>) : ''}
                       


                            <div className='flex items-center justify-center gap-3'>
                                <label>Mật khẩu:</label>
                                <input onChange={handleChange} onBlur={handleBlur} id='matKhau'value={values.matKhau} type='text' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập mật khẩu' />
                            </div>
                            {errors.matKhau && touched.matKhau ? (<div className='text-white'>{errors.matKhau}</div>) : ''}

                            {/* <div className='flex items-center justify-center gap-3'>
                                <label >Ngày khởi chiếu:</label>
                                <input onChange={(e) => {
                                      if (e.target.value) {
                                        const parts = e.target.value.split('-');
                                        const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
                                        values.ngayKhoiChieu = formattedDate;
                                      
                                        setDate(e.target.value);
                                      }
                                
                                }}   id='ngayKhoiChieu' value={date} type='date' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập ngày' />
                                        
                           
                            </div> */}

                            {/* {errors.ngayKhoiChieu && touched.ngayKhoiChieu ? (<div className='text-white'>{errors.ngayKhoiChieu}</div>) : ''} */}

                            <div className='flex items-center justify-center gap-3'>
                                <label >Email:</label>
                                <input onChange={handleChange} onBlur={handleBlur} id='email'value={values.email} type='text' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập số đánh giá' />
                              
                            </div>
                            {errors.email && touched.email ? (<div className='text-white'>{errors.email}</div>) : ''}

                            <div className='flex items-center justify-center gap-3'>
                                <label >Điện thoại:</label>
                                <input onChange={handleChange} onBlur={handleBlur} id='soDt'value={values.soDt} type='text' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập số đánh giá' />
                              
                            </div>
                            {errors.soDt && touched.soDt ? (<div className='text-white'>{errors.soDt}</div>) : ''}

                            {/* <div className='flex items-center justify-start gap-3'>
                                    <div className='flex items-center justify-start gap-3'>
                                        <label >Sắp chiếu:</label>
                                        <input onChange={handleChange} onBlur={handleBlur} id='sapChieu'value={values.sapChieu} type='checkbox' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer'  />
                                    </div>

                                    <div className='flex items-center justify-start gap-3'>
                                        <label >Đang chiếu:</label>
                                        <input onChange={handleChange} onBlur={handleBlur} id='dangChieu'value={values.dangChieu} type='checkbox' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' />
                                    </div>


                                    <div className='flex items-center justify-start gap-3'>
                                        <label >Hot:</label>
                                        <input onChange={handleChange} onBlur={handleBlur} id='hot'value={values.hot} type='checkbox' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' />
                                    </div>



                            </div> */}
                           
{/* 
                           <div className='flex items-center justify-center gap-3'>
                                <label>File:</label>
                                <input    onChange={(e) => {
                                //   const file = e.target.files[0];
                                //   setGetFile(file);
                                //   values.hinhAnh = URL.createObjectURL(file);

                                setFieldValue('hinhAnh',e.target.files[0])
                                
                                
                                
                                }}
                                //   onBlur={handleBlur}
                                //   id='hinhAnh'

                                  type="file" className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer'  />
                            </div> */}

                            {/* <div className='flex items-center justify-center gap-3'>
                                <label>File:</label>
                                <input    onChange={(e) => {
                                  const file = e.target.files[0];
                                  setGetFile(file);
                                  values.hinhAnh = URL.createObjectURL(file);}}
                                  onBlur={handleBlur}
                                  id='hinhAnh'
                                  type="file" className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer'  />
                            </div> */}


                            {/* <div className='flex items-center justify-center gap-3'>
                            <label>File:</label>
                            <input  
                                id='hinhAnh'
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    // setGetFile(e.target.files[0]);
                                    values.hinhAnh = e.target.files[0];
                                }}
                                type="file" className='flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer'  
                            />
                        </div> */}


                        
                        {/* <div className='flex items-center justify-center gap-3'>
                            <label>File:</label>
                            <input  
                                id='File'
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    // setGetFile(e.target.files[0]);
                                    values.File = e.target.files[0];
                                }}
                                type="file" className='flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer'  
                            />
                          
                             
                        </div>
                        {errors.File && touched.File ? (<div className='text-white'>{errors.File}</div>) : ''} */}

                            
                            {/* <div className='flex items-center justify-center gap-3'>
                                <label >Mô tả:</label>
                                <textarea onChange={handleChange} onBlur={handleBlur} id='moTa'value={values.moTa} type='text' className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập mô tả' ></textarea>
                            </div>
                            {errors.moTa && touched.moTa ? (<div className='text-white'>{errors.moTa}</div>) : ''} */}


                            


                            <div className='flex items-center justify-end  gap-3'>
                                <button type="submit" className=' min-w-[90px] w-30 h-[34px] bg-green-500 flex justify-center rounded-md items-center hover:shadow-md hover:shadow-gray-300 cursor-pointer hover:text-white  '>Thêm</button>
                            </div>


                        </div>


                    </form>





                </div>
            </div>

) : null}



          
        </>
    );
}

export default ModalAddUser;
