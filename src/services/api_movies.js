import { http } from "./config_service"



export const api_movies={
    getAllBanner:()=>{
        return http.get("/QuanLyPhim/LayDanhSachBanner")
    },

    getAllMovies:()=>{
        return http.get("/QuanLyPhim/LayDanhSachPhim")
    }
}