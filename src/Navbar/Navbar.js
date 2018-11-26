import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Navbar extends React.Component {

  resolvePath = pathname => {
    switch (pathname) {
      case '/':
        return ['1']
      case '/create':
        return ['2']
      case '/hosts':
        return ['3']
      case '/requests':
        return ['4']
      default:
        return ['1']
    }
  }

  resolveMenu = key => {
    if (key === '1')
      this.props.history.push('/')
    else if (key === '2')
      this.props.history.push('/create')
    else if (key === '3')
      this.props.history.push('/hosts')
    else if (key === '4')
      this.props.history.push('/requests')
    else 
      this.props.history.push('/')
  }
  render() {
    const { history } = this.props;
    return (
      <Menu
        onClick={e => this.resolveMenu(e.key)}
        style={{ height: '100vh' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        selectedKeys={this.resolvePath(history.location.pathname)}
        mode="inline"
      >
        <Menu.Item key="1">
          <Icon type="home" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="edit" />
          <span>Create</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="laptop" />
          <span>Hosts</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="snippets" />
          <span>Requests</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;