import React, { Component } from "react";
import { Table, Button, Tooltip} from 'antd';
import { PlusOutlined, FormOutlined, DeleteOutlined} from '@ant-design/icons';
// 引入样式
import './index.less'



const columns = [
  { title: '分类名称', dataIndex: 'name', key: 'name' },
 
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    width:200,
    render: () => <>
      <Tooltip placement="top" title={"更新课程"}>
        <Button icon={<FormOutlined />} type="primary" style={{ marginRight: 20, width: 40 }}></Button>
      </Tooltip>
      
      <Tooltip placement="top" title={"删除课程"}>
        <Button icon={< DeleteOutlined /> } type="danger" style={{ width: 40 }}></Button>
      </Tooltip>
      
    </>,
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];


export default class Subject extends Component {
  render() {
    return <div className="subject">
                <Button icon={<PlusOutlined />} type="primary" className="subject-btn">
                  新建
                </Button>

                {/* 表格 */}
                <Table
                  columns={columns}
                  expandable={{
                    expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                    rowExpandable: record => record.name !== 'Not Expandable',
                  }}
                  dataSource={data}
                />,

           </div>;
  }
}
