import { useSelector } from 'react-redux'
import { reducerTypes } from '../../../state/reducers'
import { DateAndTimeFormatter } from '../../../utils/FormatDate'

export const ActivityHistory = () => {
  const logs = useSelector((state:reducerTypes) => state.userActivityLogs)

  return(
    <div>
      <h1>Nhật Ký Hoạt Động</h1>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th style={{ border: '1px solid black' }}>Tên Đăng Nhập</th>
                  <th style={{ border: '1px solid black' }}>Thời Gian Tác Động</th>
                  <th style={{ border: '1px solid black' }}>IP Thực Hiện</th>
                  <th style={{ border: '1px solid black' }}>Thao Tác Thực Hiện</th>
              </tr>
          </thead>
          <tbody>
              {logs.map((log, index) => {
                  return (
                      <tr key={index}>
                          <td style={{ border: '1px solid black' }}>{log.custom_user?.username}</td>
                          <td style={{ border: '1px solid black' }}>{DateAndTimeFormatter('-', 'date', log.current_activity_time, 'showFullTime')}</td>
                          <td style={{ border: '1px solid black' }}>{log.ip}</td>
                          <td style={{ border: '1px solid black' }}>{log.action}</td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
    </div>
  )
}