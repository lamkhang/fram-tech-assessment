import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { actions } from '../store/slices/dataset'
import { Table, Form, Button, Modal, Input } from 'antd';

const Page2 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const datasets = useSelector((state: RootState) => {
    return state.dataset.listData
  });
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'position',
      dataIndex: 'position',
      key: 'position',
    },
  ]
  const fetchData = async () => {
    const res = await fetch(
      `https://5d78df3fa8c271001498668d.mockapi.io/api/dataUser`,
      {
        method: "GET",
      }
    )
    dispatch(
      actions.setList({
        listData: await res.json()
      })
    )
  }
  useEffect(() => {
    fetchData();
  }
  , []);

  const showModal = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async(values: any) => {
    const res = await fetch(
      `https://5d78df3fa8c271001498668d.mockapi.io/api/dataUser`,
      {
        method: "POST",
        body: {...values, id: Math.random()},
      }
    );
    fetchData();
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    setIsModalVisible(false);
  };

  return (
    <div>
      <h3>Employment</h3>
      <Table dataSource={datasets} columns={columns} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} />;
      <Button type="dashed" onClick={showModal}>+ New</Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} getContainer={false}>
        <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="position"
            name="position"
            rules={[{ required: true, message: 'Please input your position!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Page2;