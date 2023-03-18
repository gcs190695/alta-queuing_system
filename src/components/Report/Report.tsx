import { useSelector } from 'react-redux'
import { reducerTypes } from '../../state/reducers'
import { DateAndTimeFormatter } from '../../utils/FormatDate'

export const Report = () => {
  const reports = useSelector((state:reducerTypes) => state.reports)

  return(
    <div>
      <h1>Báo Cáo</h1>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th style={{ border: '1px solid black' }}>Số Thứ Tự</th>
                  <th style={{ border: '1px solid black' }}>Tên Dịch Vụ</th>
                  <th style={{ border: '1px solid black' }}>Thời Gian Cấp</th>
                  <th style={{ border: '1px solid black' }}>Tình Trạng</th>
                  <th style={{ border: '1px solid black' }}>Nguồn Cấp</th>
              </tr>
          </thead>
          <tbody>
              {reports.map((report, index) => {
                  return (
                      <tr key={index}>
                          <td style={{ border: '1px solid black' }}>{report.progression_id}</td>
                          <td style={{ border: '1px solid black' }}>{report.custom_service?.name}</td>
                          <td style={{ border: '1px solid black' }}>{DateAndTimeFormatter('-', 'time', report.granted_date)}</td>
                          <td style={{ border: '1px solid black' }}>{report.status === 0 ? 'Bỏ Qua': report.status === 1 ? 'Đang Chờ': report.status === 2 ? 'Đã Sử Dụng': false}</td>
                          <td style={{ border: '1px solid black' }}>{report.custom_device?.type}</td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
    </div>
  )
}