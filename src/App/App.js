// src/App.js
import React from 'react';
import { Router, Route } from "react-router-dom";
import { Layout, Button } from 'antd';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Hosts from '../Hosts/Hosts';
import Requests from '../Requests/Requests';
import CreateWhitelist from '../CreateWhitelist/CreateWhitelist';
import { history } from '../history';
// import { SpeechBubble } from 'react-kawaii';
// import SpeechMsg from '../Common/kawaii/SpeechMsg';
import './App.css';

const { Content, Sider } = Layout;

const sider_xl = 200
const sider_lg = 80
const sm_bp = 576
const lg_bp = 992

class App extends React.Component {
  state = {
    width: 1920,
    height: 1080
  }
  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
      sider_collapsed: true
    })
  }
  toggleSider = () => {
    this.setState({ sider_collapsed: !this.state.sider_collapsed })
  }
  componentWillMount = () => {
    this.updateDimensions();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const { width, height, sider_collapsed } = this.state;
    return (
      <Router history={history}>
        <Layout>
          <Sider
              style={{ height: '100vh', position: 'fixed', left: 0, zIndex: width > sm_bp ? 0 : 2 }}
              breakpoint="lg"
              collapsedWidth={width > sm_bp ? sider_lg : 0}
            >
            <Navbar history={history} />
          </Sider>
          <Layout style={{ marginLeft: width > lg_bp ? sider_xl : width > sm_bp ?  sider_lg : 0, minHeight: '100vh' }}>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: height-40 }}>
                
                <Route path="/" exact render={() => <Home height={height} wsize={width > sm_bp ? 'big' : 'small' } />} />
                <Route path="/create" render={() => <CreateWhitelist height={height} wsize={width > sm_bp ? 'big' : 'small' } />} />
                <Route path="/hosts" render={() => <Hosts height={height} wsize={width > sm_bp ? 'big' : 'small' } />} />
                <Route path="/requests" render={() => <Requests height={height} wsize={width > sm_bp ? 'big' : 'small' } />} />
                {/* <Button type="primary">Button</Button>
                <SpeechBubble size={55} mood="happy" color="#83D1FB" />
                <SpeechMsg size={10} /> */}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;