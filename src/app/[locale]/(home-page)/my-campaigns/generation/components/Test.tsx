/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { Button, Form, Input, message, Select, Spin } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const { Option } = Select;

const GenerateScript = () => {
  const [form] = Form.useForm();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('email'); // 新增的状态，默认选择 email

  const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8000',
    baseURL:
      'http://what3ver-ai-backend-dev-1234962919.us-east-2.elb.amazonaws.com',
    timeout: 60000,
  });
  const login = async () => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        email: 'panyx1002@gmail.com',
        password: 'Pan911002.',
        // password: 'imtimcook',
      });

      const { sessionId, id } = response.data;

      // 如果登录成功，将 sessionId 和 id 用于后续的请求
      console.log('Session ID:', sessionId);
      console.log('User ID:', id);

      return { sessionId, id };
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const emailGeneration = async (values: any) => {
    setLoading(true); // 开始加载
    try {
      const { sessionId, id } = await login();
      const response = await axiosInstance.post(
        '/generation/email',
        {
          product: values.product,
          product_description: values.product_description,
          tone: values.tone,
          intent: values.example,
        },
        {
          headers: {
            USER_ID: id,
            SESSION_ID: sessionId,
            'Content-Type': 'application/json',
          },
        },
      );
      setResult(response.data.script);
      message.success('Script generated successfully!');
    } catch (error) {
      message.error('Failed to generate script');
    } finally {
      setLoading(false); // 请求完成，结束加载
    }
  };

  const scriptGeneration = async (values: any) => {
    setLoading(true); // 开始加载
    try {
      const { sessionId, id } = await login();
      const response = await axiosInstance.post(
        '/generation/script',
        {
          product: values.product,
          product_description: values.product_description,
          tone: values.tone,
          intent: values.example,
        },
        {
          headers: {
            USER_ID: id,
            SESSION_ID: sessionId,
            'Content-Type': 'application/json',
          },
        },
      );
      setResult(response.data.script);
      message.success('Script generated successfully!');
    } catch (error) {
      message.error('Failed to generate script');
    } finally {
      setLoading(false); // 请求完成，结束加载
    }
  };
  return (
    <div style={{ padding: '24px' }}>
      <h1>Generate Script</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={mode === 'email' ? emailGeneration : scriptGeneration}
        initialValues={{
          product: 'Roomba Combo® j9+',
          product_description:
            'The Roomba Combo® j9+ robot vacuum and mop gives your home a powerful, hands-free clean.It is No.1 in dirt and dust pick up performance1 and the most effective mopping solution using SmartScrub.',
          duration: '120',
          tone: 'Generic',
          example: 'string',
          mode: 'email',
        }}
      >
        <Form.Item
          label="选择模式"
          name="mode"
          rules={[{ required: true, message: '请选择模式！' }]}
        >
          <Select onChange={(value) => setMode(value)}>
            <Option value="email">邮箱生成</Option>
            <Option value="script">脚本生成</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Product"
          name="product"
          rules={[
            { required: true, message: 'Please input the product name!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="product_description"
          rules={[
            {
              required: true,
              message: 'Please input the product description!',
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true, message: 'Please input the duration!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tone"
          name="tone"
          rules={[{ required: true, message: 'Please input the tone!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Example"
          name="example"
          rules={[{ required: true, message: 'Please input the example!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Generate Script
          </Button>
        </Form.Item>
      </Form>

      {loading ? (
        <>
          <Spin tip="正在生成..." style={{ marginTop: '24px' }} />
          <div>正在生成...</div>
        </>
      ) : (
        result && (
          <div style={{ marginTop: '24px' }}>
            <h2>生成的脚本:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )
      )}
    </div>
  );
};

export default GenerateScript;
