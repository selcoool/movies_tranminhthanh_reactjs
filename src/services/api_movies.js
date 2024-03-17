import { http } from "./config_service"



export const api_movies={
    getAllBanner:()=>{
        return http.get("/QuanLyPhim/LayDanhSachBanner")
    },

    getAllMovies:()=>{
        return http.get("/QuanLyPhim/LayDanhSachPhim")
    },

    getAllMoviesPagination:(curentPage,moviePerPage)=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${curentPage}&soPhanTuTrenTrang=${moviePerPage}`)
    },
    getAllTheatures:()=>{
        return http.get('/QuanLyRap/LayThongTinHeThongRap')
    }
}