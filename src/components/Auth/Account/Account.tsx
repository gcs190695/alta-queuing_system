import { useSelector } from 'react-redux'
import { reducerTypes } from '../../../state/reducers'
import { Link } from 'react-router-dom'

export const Account = () => {
  const accounts = useSelector((state:reducerTypes) => state.users)

  return(
    <div>
      <h1>Danh Sách Tài Khoản</h1>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th style={{ border: '1px solid black' }}>Tên Đăng Nhập</th>
                  <th style={{ border: '1px solid black' }}>Họ Tên</th>
                  <th style={{ border: '1px solid black' }}>Số Điện Thoại</th>
                  <th style={{ border: '1px solid black' }}>E-Mail</th>
                  <th style={{ border: '1px solid black' }}>Vai Trò</th>
                  <th style={{ border: '1px solid black' }}>Trạng Thái Hoạt Động</th>
                  <th style={{ border: '1px solid black' }}></th>
              </tr>
          </thead>
          <tbody>
              {accounts.map((account, index) => {
                  return (
                      <tr key={index}>
                          <td style={{ border: '1px solid black' }}>{account.username}</td>
                          <td style={{ border: '1px solid black' }}>{account.fullname}</td>
                          <td style={{ border: '1px solid black' }}>{account.phone_number}</td>
                          <td style={{ border: '1px solid black' }}>{account.email}</td>
                          <td style={{ border: '1px solid black' }}>{account.custom_role?.name}</td>
                          <td style={{ border: '1px solid black' }}>{account.activity_status === 0 ? 'Ngưng hoạt động' : account.activity_status === 1 ? 'Hoạt động' : false}</td>
                          <td style={{ border: '1px solid black' }}>
                              <Link to='#'>Cập Nhật</Link>
                          </td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
    </div>
  )
}