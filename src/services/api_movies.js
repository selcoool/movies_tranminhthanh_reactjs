import { http } from "./config_service"



export const api_movies={
    getAllBanner:()=>{
        return http.get("/QuanLyPhim/LayDanhSachBanner")
    },

    getAllMovies:()=>{
        return http.get("/QuanLyPhim/LayDanhSachPhim")
    },

    getAllMoviesPagination:(curentPage,moviePerPage)=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP04&soTrang=${curentPage}&soPhanTuTrenTrang=${moviePerPage}`)
    },
    getAllTheatures:()=>{
        return http.get('/QuanLyRap/LayThongTinHeThongRap')
    },
    searchAllMovies:(tenPhim,tuNgay,denNgay)=>{
       
            return http.get(`/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP04&tenPhim=${tenPhim}&tuNgay=${tuNgay}&denNgay=${denNgay}`)
   
       
    },
    getAllMoviesInTheatre:(maHeThongRap)=>{
        return http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`)

   
    },
    getAMovie:(tenPhim)=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP04&tenPhim=${tenPhim}`)
    }
}