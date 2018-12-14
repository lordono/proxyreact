import React from 'react';
import { Form, Input, Icon, Avatar, Divider, Button, Card, Row, Col, Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

class Home extends React.Component {
  state = {
  }

  render() {
    const { height, wsize } = this.props;
    const { form } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 700, width: '100%' }}>
          <div style={{ display: 'inline-flex', alignContent: 'center', justifyContent: 'start'}}>
            <Avatar shape="square" size={64} icon="home" />
            <div style={{ marginLeft: 10 }}>
              <h1 style={{ fontSize: wsize === 'big' ? 25 : 23, fontWeight: 800, color: "#666", marginBottom: 0 }}>RunGateway</h1>
              <h3 style={{ fontSize: wsize === 'big' ? 15 : 11, fontStyle: 'italic', color: "#666", marginBottom: 0 }}>Manage your Gateways!</h3>
            </div>
          </div>
          <Divider />
          <Row type="flex" justify="center" gutter={16}>
            <Col span={12}>
              <Card
                hoverable
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontWeight: 800, fontSize: '2.8rem' }}>50</div>
                <div style={{ color: 'rgba(0, 0, 0, 0.45)', fontSize: `${wsize === 'big' ? 1.2 : 0.7}rem` }}>Hosts in Department</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                hoverable
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontWeight: 800, fontSize: '2.8rem' }}>40</div>
                <div style={{ color: 'rgba(0, 0, 0, 0.45)', fontSize: `${wsize === 'big' ? 1.2 : 0.7}rem` }}>Department Requests</div>
              </Card>
            </Col>
            <Col span={24} style={{ marginTop: 10 }}>
              <Table columns={columns} dataSource={data} size="middle" />
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }
}

export default Home;