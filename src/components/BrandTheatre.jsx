import React, { useEffect, useState } from 'react';
import { api_movies } from '../services/api_movies';

import moment from 'moment';
import 'moment/locale/vi';

function BrandTheatre() {
  const [brands, setBrands] = useState([]);
  const [brandMovies, setBrandMovies] = useState([]);
  const [relatedBrandMovies, setRelatedBrandMovies] = useState([]);

  const [toggleStateBrand, setToggleStateBrand] = useState(0);
  const [toggleStateCumRap, setToggleStateCumRap] = useState();

  const toggleTab = (index) => {
    setToggleStateBrand(index);
    setToggleStateCumRap(null)
 
  };

  const toggleAddress = (index) => {
    setToggleStateCumRap(index);

  };

  // console.log('vvvvvvv', toggleStateCumRap);

  const findMoviesInTheatre = (maHeThongRap) => {
    api_movies
      .getAllMoviesInTheatre(maHeThongRap)
      .then((data) => {
        setBrandMovies(data.data.content);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    api_movies
      .getAllTheatures()
      .then((data) => {
        setBrands(data.data.content);
      })
      .catch((err) => {
        console.log('error', err);
      });

    findMoviesInTheatre('BHDStar');
  }, []);

  return (
    <div className='flex justify-center items-center p-5 mx-4'>
    <div className='w-fit h-fit'>
      {/* <div className='w-full h-full  flex flex-wrap flex-col justify-center items-center bg-slate-500'> */}
        <div className='flex flex-col lg:flex-row  lg:max-h-[500px] h-fit gap-1 shadow-lg shadow-slate-400'>
          <div className='tabs flex flex-row lg:flex-col justify-center items-center gap-1'>
            {brands?.map((brand, indexBrand) => (
              <div
                key={indexBrand}
                className={`tab h-fit w-fit bg-red-300 cursor-pointer relative  ${
                  toggleStateBrand === indexBrand ? 'bg-orange-400' : ''
                }`}
                onClick={() => {
                  toggleTab(indexBrand);
                  findMoviesInTheatre(brand.maHeThongRap);
                }}
              >
                <div className='h-12 w-12 lg:h-20 lg:w-20'>
                  <img className='w-full h-full p-2' src={brand.logo} alt={brand.maHeThongRap} />
                </div>
                {toggleStateBrand === indexBrand && (
                  <h1 className='absolute h-1 bottom-0 lg:h-full w-full lg:w-1 bg-red-500   lg:right-0 lg:bottom-0'></h1>
                )}
              </div>
            ))}
          </div>
          <div className='panels-wrapper w-full relative flex flex-col max-w-[500px] max-h-[300px]  lg:max-h-[600px]'>
            
            <div className='panels bg-orange-400 overflow-y-auto no-scrollbar'>
            <h1 className='text-center font-bold text-xl pt-2'>Địa chỉ:</h1>
              {brandMovies?.map((brandMovie, indexMovie) => (
                <div key={indexMovie} className='flex flex-col h-full  min-h-[600px] bg-orange-400/70'>
                  <div className='flex justify-center py-4 items-center'>
                    <img className='h-20 w-20' src={brandMovie.logo} alt='' />
                  </div>
{/* 
                  {console.log('pppppppp',brandMovie)} */}
                  {brandMovie.lstCumRap?.map((cumRap, indexCumRap) => (
                    <div key={indexCumRap} className={`p-4 cursor-pointer ${toggleStateCumRap === indexCumRap ? 'bg-slate-200': ''} hover:bg-slate-300 relative`} onClick={() => [setRelatedBrandMovies(cumRap.danhSachPhim), setToggleStateCumRap(indexCumRap)]}>
                      <div className='font-bold'>{cumRap.tenCumRap}</div>
                      <div>{cumRap.diaChi}</div>
                      {toggleStateCumRap === indexCumRap && (
                        <h1 className='absolute h-full w-1 bg-cyan-500 right-0 bottom-0'></h1>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className='panels w-full flex flex-col  bg-orange-400 max-w-[500px] max-h-[300px] lg:max-h-[500px] overflow-y-auto no-scrollbar'>
          <h1 className='text-center font-bold text-red-800  text-xl pt-2'>Danh sách phim và thời gian chiếu:</h1>
            {relatedBrandMovies?.length >= 1 ? (
              
              relatedBrandMovies.map((relatedBrandMovie, indexRelatedBrandMovie) => (
                <div key={indexRelatedBrandMovie} className='flex flex-col justify-center items-center gap-2 p-4 bg-orange-400'>
                  <div><img className='h-40 w-40 object-cover' src={relatedBrandMovie.hinhAnh} alt='' /></div>
                  <div className='font-bold'>{relatedBrandMovie.tenPhim}</div>
                  <div className='flex flex-col gap-2'>
                    {relatedBrandMovie.lstLichChieuTheoPhim.map((lichChieuTheoPhim, indexLichChieuTheoPhim) => (
                      <div key={indexLichChieuTheoPhim} className='flex justify-center gap-2'>
                        {/* <div className='text-white bg-orange-800 p-1 px-2  rounded-lg'>{lichChieuTheoPhim.tenRap}</div> */}
                        <div className='text-white bg-orange-800 p-1 px-2 rounded-lg'>{lichChieuTheoPhim.giaVe}</div>
                        <div className='text-white bg-orange-800 p-1 px-2 rounded-lg'>{moment(lichChieuTheoPhim.ngayChieuGioChieu).format('HH:MM:SS')}-{moment(lichChieuTheoPhim.ngayChieuGioChieu).format('DD/MM/YYYY')}</div>
                        {/* <div className='text-white bg-green-500 p-1  px-2 rounded-lg hover:bg-green-700 cursor-pointer'>Đặt Vé</div> */}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className='flex justify-center items-center h-full px-8 text-white'>Vui lòng chọn địa điểm cần xem phim</div>
            )}
          </div>
        </div>
      {/* </div> */}
    </div>
    </div>
  );
}

export default BrandTheatre;
