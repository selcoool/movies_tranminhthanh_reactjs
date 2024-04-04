import { http } from "./config_service"



export const api_movies={
    getAllUsersManagement:()=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP04`)
    }
}