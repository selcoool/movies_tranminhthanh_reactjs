import { http } from "./config_service"



export const api_users={
    getAllUsersManagement:()=>{
        return http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04`)
    }
}