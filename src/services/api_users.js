import { http } from "./config_service"



export const api_users={
    getAllUsersManagement:()=>{
        return http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04`)
    },
    createAUser:(user)=>{

        const a={

            taiKhoan: "stringtaiKhoan2",
matKhau: "stringmatKhau2",
email: "stringemail2@gmail.com",
soDt: "09021296093",
maNhom: "GP04",
hoTen: "stringhoTen3"

        }
      
        return http.post(`/QuanLyNguoiDung/DangKy`,a)

      
    }
}