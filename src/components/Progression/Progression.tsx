import { useSelector } from 'react-redux'
import { reducerTypes } from '../../state/reducers'
import { Link } from 'react-router-dom'
import { DateAndTimeFormatter } from '../../utils/FormatDate'

export const Progression = () => {
  const progressions = useSelector((state:reducerTypes) => state.progressions)

  return(
    <div>
      <h1>Quản Lý Cấp Số</h1>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th style={{ border: '1px solid black' }}>STT</th>
                  <th style={{ border: '1px solid black' }}>Tên Khách Hàng</th>
                  <th style={{ border: '1px solid black' }}>Tên Dịch Vụ</th>
                  <th style={{ border: '1px solid black' }}>Thời Gian Cấp</th>
                  <th style={{ border: '1px solid black' }}>Hạn Sử Dụng</th>
                  <th style={{ border: '1px solid black' }}>Trạng Thái</th>
                  <th style={{ border: '1px solid black' }}>Nguồn Cấp</th>
                  <th style={{ border: '1px solid black' }}></th>
              </tr>
          </thead>
          <tbody>
              {progressions.map((progression, index) => {
                  return (
                      <tr key={index}>
                          <td style={{ border: '1px solid black' }}>{progression.id}</td>
                          <td style={{ border: '1px solid black' }}>{progression.customer_name}</td>
                          <td style={{ border: '1px solid black' }}>{progression.custom_Service?.name}</td>
                          <td style={{ border: '1px solid black' }}>{DateAndTimeFormatter('-', 'time', progression.grant_time)}</td>
                          <td style={{ border: '1px solid black' }}>{DateAndTimeFormatter('-', 'time', progression.expire_time)}</td>
                          <td style={{ border: '1px solid black' }}>
                            {progression.status === 0 ? 'Bỏ Qua': progression.status === 1 ? 'Đang Chờ': progression.status === 2 ? 'Đã Sử Dụng' : false}
                          </td>
                          <td style={{ border: '1px solid black' }}>
                              {progression.custom_Device?.type}
                          </td>
                          <td style={{ border: '1px solid black' }}>
                              <Link to='#'>Chi Tiết</Link>
                          </td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
    </div>
  )
}