import { http } from "./config_service"



export const api_movies={
    getAllBanner:()=>{
        return http.get("/QuanLyPhim/LayDanhSachBanner")
    },

    getAllMovies:(tenPhim)=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP04&tenPhim=${tenPhim}`)
    },

    getAllMoviesPagination:(curentPage,moviePerPage)=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP04&soTrang=${curentPage}&soPhanTuTrenTrang=${moviePerPage}`)
    },
    getAllTheatures:()=>{
        return http.get('/QuanLyRap/LayThongTinHeThongRap')
    },
    searchAllMovies:(tenPhim,tuNgay,denNgay)=>{
        if (typeof tenPhim === 'undefined' || tenPhim.trim() === '') {
            return http.get(`/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP04&tuNgay=${tuNgay}&denNgay=${denNgay}`);
         } else {
            return http.get(`/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP04&tenPhim=${tenPhim}&tuNgay=${tuNgay}&denNgay=${denNgay}`);
          }
        
    },
    getAllMoviesInTheatre:(maHeThongRap)=>{
        return http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`)

   
    },
    getAMovie:(tenPhim)=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP04&tenPhim=${tenPhim}`)
    }
    ,
    getAllSeats:(MaLichChieu)=>{
        return http.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${MaLichChieu}`)
    }
    ,
    getAllMoviesManagement:()=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP04`)
    },
    createAMovie:(movie)=>{
        // const Movie={
        //     File: "blob:http://localhost:3000/a93a4706-a331-4cb0-acee-0d194f456268",
        //     biDanh: "test532",
        //     dangChieu: true,
        //     danhGia: 6,
        //     hot: false,
        //     maNhom: "GP04",
        //     maPhim: 3,
        //     moTa: "8",
        //     ngayKhoiChieu: "2024-04-08",
        //     sapChieu: true,
        //     tenPhim: "test532",
        //     trailer: "https://www.youtube.com/watch?v=_YRxG8xkwgM"
        //     // maPhim: 13810,
        //     // tenPhim: "test34",
        //     // trailer: "https://www.youtube.com/watch?v=_YRxG8xkwgM",
        //     // moTa: "rrrr",
        //     // maNhom": "GP01",
        //     // ngayKhoiChieu": "2024-08-01T00:00:00",
        //     // daXoa": false,
        //     // sapChieu": true,
        //     // dangChieu": true,
        //     // hot": false,
        //     // danhGia": 2,
        //     // hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test34_gp01.PNG"

            
        // }

        // const movie1 ={
        //     tenPhim: movie.tenPhim,
        //     trailer:movie.trailer,
        //     moTa:movie.trailer,
        //     ngayKhoiChieu:"10/10/2024",
        //     sapChieu:true,
        //     dangChieu:false,
        //     hot:true,
        //     danhGia:0,
        //     maNhom:"GP04",
        //   //   hinhAnh:'',
        //     File:movie.File,
        // }

        return http.post(`/QuanLyPhim/ThemPhimUploadHinh`,movie)

        // console.log('ppppppppppppppppppppppppp_Movieppp',Movie)
    }
}