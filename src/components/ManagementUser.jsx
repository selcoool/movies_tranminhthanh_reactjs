import React from 'react'

function ManagementUser({listUsers}) {
    console.log('listUsers',listUsers)
  return (
    <table className="border border-collapse border-gray-300 w-full shadow-gray-400 shadow-md">                    
    <thead>
        <tr>
            <th className="border border-gray-950 p-0.5 text-center">Tài Khoản</th>
            <th className="border border-gray-950 p-0.5 text-center">Email</th>
            <th className="border border-gray-950 p-0.5 text-center">Họ Tên</th>
            <th className="border border-gray-950 p-0.5 text-center">SĐT</th>
            <th className="border border-gray-950 p-0.5 text-center">Mật Khẩu</th>
            <th className="border border-gray-950 p-0.5 text-center">Chỉnh Sửa</th>
        </tr>
    </thead>
    <tbody>
        {listUsers?.map((listUser, indexListUser) => {
            return (
                <tr key={indexListUser}>
                    <td className="border border-gray-950 text-center">{listUser.taiKhoan}</td>
                    <td className="border border-gray-950 text-center">{listUser.email}</td>
                    <td className="border border-gray-950 text-center">{listUser.hoTen}</td>
                    <td className="border border-gray-950 text-center">{listUser.soDT}</td>
                    <td className="border border-gray-950 text-center">{listUser.matKhau}</td>
                    
                    <td className="border border-gray-950 ">
                        <div className='w-full h-full flex justify-center items-center gap-1'>
                            <div className='bg-red-600 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer'> Xóa</div>
                            <div className='bg-yellow-400 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer'> Thêm</div>
                            <div className='bg-blue-600 shadow-md shadow-slate-600 py-0.5 px-1 rounded-md hover:text-white hover:bg-red-500 hover:scale-110 cursor-pointer'> Sửa</div>
                        </div>
                    </td>
                </tr>
            )
        })}
    </tbody>
    </table>
  )
}

export default ManagementUser
