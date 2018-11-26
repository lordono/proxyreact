import React from 'react';
import { Form, Input, Icon, Avatar, Divider, Button } from 'antd';
import EditableTable from './TableForm/WLTableForm';

const FormItem = Form.Item;

class CreateWhitelist extends React.Component {
  state = {
    form: {
      host: '',
      domains: [{
        key: '0',
        name: 'Old Domain 1',
      }, {
        key: '1',
        name: 'Old Domain 2',
      }],
    },
    count: 2
  }

  handleDelete = (key) => {
    const domains = [...this.state.form.domains];
    this.setState({ 
      form: { 
        ...this.state.form, 
        domains: domains.filter(item => item.key !== key) 
      } 
    });
  }

  handleAdd = () => {
    const { count } = this.state;
    const newData = {
      key: count,
      name: `New Domain ${count+1}`
    };
    this.setState({
      form: { 
        ...this.state.form, 
        domains: [...this.state.form.domains, newData] 
      },
      count: count + 1,
    });
  }

  handleSave = (row) => {
    const newData = [...this.state.form.domains];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ 
      form: { 
        ...this.state.form, 
        domains: newData 
      }
    });
  }

  render() {
    const { height, wsize } = this.props;
    const { form } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 700, width: '100%' }}>
          <div style={{ display: 'inline-flex', alignContent: 'center', justifyContent: 'start'}}>
            <Avatar shape="square" size={64} icon="edit" />
            <div style={{ marginLeft: 10 }}>
              <h1 style={{ fontSize: wsize === 'big' ? 25 : 23, fontWeight: 800, color: "#666", marginBottom: 0 }}>New Host Whitelist</h1>
              <h3 style={{ fontSize: wsize === 'big' ? 15 : 11, fontStyle: 'italic', color: "#666", marginBottom: 0 }}>Create a host with its whitelisted domains</h3>
            </div>
          </div>
          <Divider />
          <FormItem>
            <Input 
              prefix={<Icon type="laptop" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Hostname" 
              value={form.host} 
              onChange={e => this.setState({
                form: {
                  ...form,
                  host: e.target.value
                }
              })} 
            />
          </FormItem>
          <EditableTable 
            pageSize={Math.floor(height/150)}
            domains={form.domains}
            handleDelete={this.handleDelete} 
            handleAdd={this.handleAdd} 
            handleSave={this.handleSave} 
          />
          <FormItem style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" htmlType="submit" >
              Submit Request
            </Button>
          </FormItem>
        </div>
      </div>
    );
  }
}

export default CreateWhitelist;