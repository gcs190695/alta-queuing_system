import { useSelector } from 'react-redux'
import { reducerTypes } from '../../../state/reducers'
import { Link } from 'react-router-dom'

export const Role = () => {
  const roles = useSelector((state:reducerTypes) => state.userRoles)

  return(
    <div>
      <h1>Danh Sách Vai Trò</h1>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th style={{ border: '1px solid black' }}>Tên Vai Trò</th>
                  <th style={{ border: '1px solid black' }}>Số Người Sử Dụng</th>
                  <th style={{ border: '1px solid black' }}>Mô Tả</th>
                  <th style={{ border: '1px solid black' }}></th>
              </tr>
          </thead>
          <tbody>
              {roles.map((role, index) => {
                  return (
                      <tr key={index}>
                          <td style={{ border: '1px solid black' }}>{role.name}</td>
                          <td style={{ border: '1px solid black' }}>{role.user_count}</td>
                          <td style={{ border: '1px solid black' }}>{role.desc}</td>
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