import { useSelector } from 'react-redux'
import { reducerTypes } from '../../state/reducers'
import { Link } from 'react-router-dom'

export const Device = () => {
  const devices = useSelector((state:reducerTypes) => state.devices)

  return(
    <div>
      <h1>Danh Sách Thiết Bị</h1>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th style={{ border: '1px solid black' }}>Mã Thiết Bị</th>
                  <th style={{ border: '1px solid black' }}>Tên Thiết Bị</th>
                  <th style={{ border: '1px solid black' }}>Địa Chỉ IP</th>
                  <th style={{ border: '1px solid black' }}>Trạng Thái Hoạt Động</th>
                  <th style={{ border: '1px solid black' }}>Trạng Thái Kết Nối</th>
                  <th style={{ border: '1px solid black' }}>Dịch Vụ Sử Dụng</th>
                  <th style={{ border: '1px solid black' }}></th>
                  <th style={{ border: '1px solid black' }}></th>
              </tr>
          </thead>
          <tbody>
              {devices.map((device, index) => {
                  return (
                      <tr key={index}>
                          <td style={{ border: '1px solid black' }}>{device.id}</td>
                          <td style={{ border: '1px solid black' }}>{device.name}</td>
                          <td style={{ border: '1px solid black' }}>{device.ip}</td>
                          <td style={{ border: '1px solid black' }}>{device.activity_status === 0 ? 'Ngưng Hoạt Động' : 'Hoạt Động'}</td>
                          <td style={{ border: '1px solid black' }}>{device.connection_status === 0 ? 'Kết Nối' : 'Mất Kết Nối'}</td>
                          <td style={{ border: '1px solid black' }}>
                              {device.customServices?.map((service) => {
                                if (device.customServices![device.customServices!.length - 1] === service)
                                {
                                  return service.name
                                }
                                return `${service.name}, `
                              })}
                          </td>
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