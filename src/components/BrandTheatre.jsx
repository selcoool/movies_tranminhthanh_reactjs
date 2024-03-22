import React, { useEffect, useState } from 'react';
import { api_movies } from '../services/api_movies';

function BrandTheatre() {
  const [brands, setBrands] = useState([]);
  const [brandMovies, setBrandMovies] = useState([]);
  const [relatedBrandMovies, setRelatedBrandMovies] = useState([]);

  const [toggleStateBrand, setToggleStateBrand] = useState(0);

  const [toggleStateCumRap, setToggleStateCumRap] = useState();

  const toggleTab = (index) => {
    setToggleStateBrand(index);
  };


  const toggleAddress = (index) => {
    setToggleStateCumRap(index);
  };

  console.log('vvvvvvv',toggleStateCumRap)

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
    <div className='w-full h-full'>
      <div className='w-full h-full py-7 flex flex-col justify-center items-center bg-slate-500 relative'>
        <div className='flex flex-row gap-1 max-h-[450px]'>
          <div className='tabs flex flex-col justify-center items-center gap-1'>
            {brands?.map((brand, indexBrand) => (
              <div
                key={indexBrand}
                className={`tab h-fit w-fit bg-red-300 p-4 cursor-pointer relative  ${
                  toggleStateBrand === indexBrand ? 'bg-orange-400' : ''
                }`}
                onClick={() => {
                  toggleTab(indexBrand);
                  findMoviesInTheatre(brand.maHeThongRap);
                }}
              >
                <div className='h-10 w-10'>
                  <img  className='w-ful w-full' src={brand.logo} alt={brand.maHeThongRap} />
                </div>
                {toggleStateBrand === indexBrand && (
                  <h1 className='absolute h-full w-1 bg-red-500 right-0 bottom-0'></h1>
                )}
              </div>
            ))}
          </div>
          <div className='panels flex flex-col bg-gray-300 overflow-y-auto'>
            {brandMovies?.map((brandMovie, indexMovie) => (
              <div key={indexMovie} className='flex flex-col bg-orange-400/70'>
                <div className='flex justify-center py-4 items-center'>
                  <img className='h-14 w-14' src={brandMovie.logo} alt="" />
                </div>
                {brandMovie.lstCumRap?.map((cumRap, indexCumRap) => (
                  <div key={indexCumRap} className='p-4 cursor-pointer hover:bg-slate-200 relative' onClick={() => [setRelatedBrandMovies(cumRap.danhSachPhim),setToggleStateCumRap(indexCumRap)]}>
                    <div className='font-bold'>{cumRap.tenCumRap}</div>
                    <div>{cumRap.diaChi}</div>

                    {toggleStateCumRap === indexCumRap && (
                  <h1 className='absolute h-full w-1 bg-red-500 right-0 bottom-0'></h1>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className='panels flex flex-col bg-orange-400 overflow-y-auto'>
            {relatedBrandMovies?.length >= 1 ? (
              relatedBrandMovies.map((relatedBrandMovie, indexRelatedBrandMovie) => (
                <div key={indexRelatedBrandMovie} className='flex flex-col justify-center items-center gap-2 pt-4 bg-orange-400'>
                  <div><img className='h-20 w-20' src={relatedBrandMovie.hinhAnh} /></div>
                  <div className='font-bold'>{relatedBrandMovie.tenPhim}</div>
                  <div className='flex flex-col gap-2'>
                    {relatedBrandMovie.lstLichChieuTheoPhim.map((lichChieuTheoPhim, indexLichChieuTheoPhim) => (
                      <div key={indexLichChieuTheoPhim} className='flex justify-center gap-2'>
                        <div className='text-white bg-orange-800 p-1 rounded-lg'>{lichChieuTheoPhim.tenRap}</div>
                        <div className='text-white bg-orange-800 p-1 rounded-lg'>{lichChieuTheoPhim.giaVe}</div>
                        <div className='text-white bg-orange-800 p-1 rounded-lg'>{lichChieuTheoPhim.ngayChieuGioChieu}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className='flex justify-center items-center h-full px-8 text-white'> 
                   Vui lòng chọn địa điểm cần xem  phim
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default BrandTheatre;
