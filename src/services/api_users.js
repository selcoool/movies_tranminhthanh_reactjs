import { http } from "./config_service"



export const api_users={
    getAllUsersManagement:()=>{
        return http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04`)
    },
    createAUser:(user)=>{
      
        return http.post(`/QuanLyPhim/ThemPhimUploadHinh`,user)

      
    }
}