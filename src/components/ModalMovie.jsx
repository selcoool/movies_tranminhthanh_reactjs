import React, { useEffect, useState } from 'react';
import { api_movies } from '../services/api_movies';

function ModalMovie({ isOpen, setIsOpen,tenPhim }) {
    // console.log('isOpen', isOpen);
    // console.log('tenPhim', tenPhim);

    const [trailerMovie, setTrailerMovie] = useState();

    
    const handleCloseModal =(e)=>{
        if(e.target.id==="wrapper")
       {
        setIsOpen(false)
       } 
    }


    useEffect(() => {
        api_movies.getAllMovies(tenPhim)
          .then((data) => {
           const currentFilm =data.data.content[0].trailer

           const parts = currentFilm.split("?v="); // Chia chuỗi thành mảng con dựa trên '?v='
           const videoId = parts[1].split("&")[0]; // Lấy phần tử thứ 2 của mảng con và chia thành mảng con mới dựa trên '&', lấy phần tử đầu tiên
           console.log('videoId',videoId); // PLTm0qahjF8VYOeQd4aW6cQ7nB_IiIT257
           setTrailerMovie(videoId)
          
          //  const currentFilm =data.data.content.filter((movies, index)=>{
          //   //  return movies.tenPhim===tenPhim
          //   console.log('data.data m', data.data.content);
          //  })
           console.log('data.data m', data.data.content[0].trailer);
        // setTrailerMovie(currentFilm)
          //  console.log('currentFilm',currentFilm);
          //  console.log('video',currentFilm[0].trailer);
          })
          .catch((err) => {
            console.log('error', err);
          });

      }, [tenPhim]);
   

    return (
        <>
            {isOpen ? (
    <div id='wrapper' onClick={handleCloseModal} className='fixed z-10 top-0 left-0 flex justify-center items-center w-full h-full'>
        <div className='w-fit h-fit  bg-slate-100'>
            <iframe
                className="lg:w-[650px] lg:h-[350px] w-full"
                src={`https://www.youtube.com/embed/${trailerMovie}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    </div>
) : null}
        </>
    );
}

// Modal
//                     <button onClick={() => setIsOpen(false)}>Close Modal</button>
export default ModalMovie;