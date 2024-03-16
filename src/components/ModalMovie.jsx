import React, { useEffect, useState } from 'react';
import { api_movies } from '../services/api_movies';

function ModalMovie({ isOpen, setIsOpen,maPhim }) {
    // console.log('isOpen', isOpen);
    // console.log('maPhim', maPhim);

    const [trailerMovie, setTrailerMovie] = useState();

    
    const handleCloseModal =(e)=>{
        if(e.target.id==="wrapper")
       {
        setIsOpen(false)
       } 
    }


    useEffect(() => {
        api_movies.getAllMovies()
          .then((data) => {
            console.log('cccccccccccccc',data.data.content);
          
           const currentFilm =data.data.content.filter((movies)=>{
             return movies.maPhim==maPhim;
           })
        //    console.log('data.data m', data.data.content.items);
        // setTrailerMovie(currentFilm)
           console.log('currentFilm',currentFilm);
          //  console.log('video',currentFilm[0].trailer);
          })
          .catch((err) => {
            console.log('error', err);
          });
    console.log('maPhim', maPhim);
      }, [maPhim]);
   

    return (
        <>
            {isOpen ? (
    <div id='wrapper' onClick={handleCloseModal} className='fixed z-10 top-0 left-0 flex justify-center items-center w-full h-full'>
        <div className='w-fit h-fit bg-slate-100'>
            <iframe
                className="lg:w-[750px] lg:h-[400px] w-full"
                src={`https://www.youtube.com/embed/EX6clvId19s`}
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