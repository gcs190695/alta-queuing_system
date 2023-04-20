import type { ColumnsType } from 'antd/es/table'
import { DeviceType, ServiceType, ProgressionType, ReportType, UserRoleType, UserType, UserActivityLogType } from '../../../../../../../state/data_types'
import { ProgressionStatus } from '../../../../../../Progression/Status'

type ProgressionDataType = {
  key: string,
} & ProgressionType


export const Columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
    className: 'hide'
  },
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => (<ProgressionStatus status={record.status} />)
  },
] as ColumnsType<ProgressionDataType>

export const dataSource = (data: DeviceType[] | ServiceType[] | ProgressionType[] | ReportType[] | UserRoleType[] | UserType[] | UserActivityLogType[]) => {
  const progressions = [] as ProgressionDataType[]
  data.map((progression, index) => {
    const cloneProgressionObj = {} as ProgressionType
    const assignedProgressionObj = Object.assign(progression, cloneProgressionObj)
    const progressionDataType = {
      key: index.toString(),
      id: assignedProgressionObj.id,
      status: assignedProgressionObj.status,
    } as ProgressionDataType
    return progressions.push(progressionDataType)
  })
  return progressions as ProgressionDataType[]
}