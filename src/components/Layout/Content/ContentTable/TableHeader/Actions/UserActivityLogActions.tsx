import { Row, Col, Typography } from "antd"
import { DateRangeSelect } from "../../../../../Generals/DataEntry";
import { SearchInput } from "../../../../../Generals/DataEntry";

// Search Input
const onSearch = (value: string) => console.log(value);

export const UserActivityLogActions = () => {
  return (
    <Row gutter={8} className='table-header-row'>
      <Col className='table-header-col'>
        <Typography.Title level={3} className='table-header-title'>Chọn thời gian</Typography.Title>
        <DateRangeSelect />
      </Col>
      <Col className='table-header-col margin-start-auto'>
        <Typography.Title level={3} className='table-header-title'>Từ khóa</Typography.Title>
        <SearchInput placeholder="Nhập từ khóa" onSearch={onSearch} style={{ width: 200 }} className='table-header-search-input' />
      </Col>
    </Row>
  )
}