import { Row, Col, Typography } from "antd"
import { DateRangeSelect } from "../../../../../Generals/DataEntry"
// // Select
// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };


// // Search Input
// const onSearch = (value: string) => console.log(value);

export const ReportActions = () => {
  return (
    <Row gutter={8} className='table-header-row'>
      <Col className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Chọn thời gian</Typography.Title>
        <DateRangeSelect />
      </Col>
    </Row>
  )
}