import { useSelector } from 'react-redux'
import { reducerTypes } from '../../state/reducers'
import { Link } from 'react-router-dom'

export const Service = () => {
  const services = useSelector((state:reducerTypes) => state.services)

  return(
    <div>
      <h1>Quản Lý Dịch Vụ</h1>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th style={{ border: '1px solid black' }}>Mã Dịch Vụ</th>
                  <th style={{ border: '1px solid black' }}>Tên Dịch Vụ</th>
                  <th style={{ border: '1px solid black' }}>Mô Tả</th>
                  <th style={{ border: '1px solid black' }}>Trạng Thái Hoạt Động</th>
                  <th style={{ border: '1px solid black' }}></th>
                  <th style={{ border: '1px solid black' }}></th>
              </tr>
          </thead>
          <tbody>
              {services.map((service, index) => {
                  return (
                      <tr key={index}>
                          <td style={{ border: '1px solid black' }}>{service.id}</td>
                          <td style={{ border: '1px solid black' }}>{service.name}</td>
                          <td style={{ border: '1px solid black' }}>{service.desc}</td>
                          <td style={{ border: '1px solid black' }}>{service.activity_status === 0 ? 'Ngưng Hoạt Động' : 'Hoạt Động'}</td>
                          <td style={{ border: '1px solid black' }}>
                              <Link to='#'>Chi Tiết</Link>
                          </td>
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