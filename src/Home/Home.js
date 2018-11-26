import React from 'react';
import { Form, Input, Icon, Avatar, Divider, Button } from 'antd';

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
              <h1 style={{ fontSize: wsize === 'big' ? 25 : 23, fontWeight: 800, color: "#666", marginBottom: 0 }}>Gateway as Service</h1>
              <h3 style={{ fontSize: wsize === 'big' ? 15 : 11, fontStyle: 'italic', color: "#666", marginBottom: 0 }}>Enjoy creating Gateways!</h3>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    );
  }
}

export default Home;