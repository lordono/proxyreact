import React from 'react';
import { Table, Button, Popconfirm, Icon } from 'antd';
import { EditableFormRow, EditableCell } from './WLTableCell';

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: (
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span>Whitelist Domains</span>
          <Button type="primary" onClick={this.props.handleAdd}>
            <Icon type="plus-circle" theme="filled" />Domain
          </Button>
        </div>
      ),
      colSpan: 2,
      dataIndex: 'name',
      editable: true,
    }, {
      colSpan: 0,
      dataIndex: 'operation',
      width: 50,
      render: (text, record) => {
        return (
          this.props.domains.length > 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.props.handleDelete(record.key)}>
                <Button type="danger" shape="circle">
                  <Icon type="delete" />
                </Button>
              </Popconfirm>
            ) : null
        );
      },
    }];
  }

  render() {
    const { pageSize, domains  } = this.props;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.props.handleSave,
        }),
      };
    });
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          dataSource={domains}
          columns={columns}
          pagination={{ pageSize: pageSize, showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} domains` }}
        />
      </div>
    );
  }
}

export default EditableTable;