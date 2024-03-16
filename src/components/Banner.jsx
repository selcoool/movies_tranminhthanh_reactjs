import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { api_movies } from '../services/api_movies';
import Modal from './Modal';
import { FaRegCirclePlay } from "react-icons/fa6";

function Banner() {
  const [slides, setSlides] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  

  useEffect(() => {
    api_movies.getAllBanner()
      .then((data) => {
        setSlides(data.data.content);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);



  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="min-h-[500px] lg:min-h-[590px] w-full flex justify-center relative group">
      {slides && (
        <div
          style={{ backgroundImage: `url('${slides[currentIndex]?.hinhAnh}')` }}
          className="w-full h-full flex items-center justify-center bg-center bg-cover duration-500"
        >
         <div className='absolute top-[50%]  text-white text-8xl' onClick={()=>setIsOpen(!isOpen)}><FaRegCirclePlay/></div>
         <Modal isOpen={isOpen} setIsOpen={setIsOpen} maPhim={slides[currentIndex]?.maPhim} />

        </div>
      )}
     

      <div className=" absolute top-[50%]  translate-y-[50%] left-5 cursor-pointer">
        <FaChevronLeft size={30} color="white" onClick={prevSlide} />
      </div>

      <div className=" absolute top-[50%] translate-y-[50%] right-10 cursor-pointer">
        <FaChevronRight size={30} color="white" onClick={nextSlide} />
      </div>

      <div className="absolute flex justify-center items-center bottom-5 gap-4">
        {slides &&
          slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              <div
                onClick={() => goToSlide(slideIndex)}
                className={`w-[15px] h-[15px] rounded-full transition-all duration-500 ${
                  currentIndex === slideIndex ? 'p-3 bg-white' : 'bg-slate-600'
                } cursor-pointer`}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Banner;