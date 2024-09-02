'use client';

import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Info from './components/Info/Info';

export default function NewCampaign() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [triggerData, setTriggerData] = useState(null); // 保存trigger的数据

  const trigger = (data: any) => {
    setShow(!show);
    setTriggerData(data); // 保存数据到状态中
  };

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

  const emailGeneration = async (params: CampaignParams) => {
    setLoading(true); // 开始加载
    try {
      const { sessionId, id } = await login();
      const response = await axiosInstance.post('/generation/email', params, {
        headers: {
          USER_ID: id,
          SESSION_ID: sessionId,
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('data', JSON.stringify(response.data.script));
      router.push('/campaign/detail?type=email');
    } catch (error) {
      // 
    } finally {
      setLoading(false); // 请求完成，结束加载
    }
  };

  const scriptGeneration = async (params: CampaignParams) => {
    setLoading(true); // 开始加载
    try {
      const { sessionId, id } = await login();
      const response = await axiosInstance.post('/generation/script', params, {
        headers: {
          USER_ID: id,
          SESSION_ID: sessionId,
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('data', JSON.stringify(response.data.script));
      router.push('/campaign/detail?type=script');
    } catch (error) {
      // 
    } finally {
      setLoading(false); // 请求完成，结束加载
    }
  };

  const generate = (data: any) => {
    const result = Object.assign(data, triggerData);
    console.log(result);
    if (result.type === 'email') {
      emailGeneration({
        product: result.product,
        product_description: result.product_description,
        duration: result.duration,
        tone: result.tone,
        example: result.example,
        company_name: result.company_name,
        intent: result.intent,
        unique_selling_points: result.unique_selling_points,
      });
    } else {
      scriptGeneration({
        product: result.product,
        product_description: result.product_description,
        duration: result.duration,
        tone: result.tone,
        example: result.example,
        company_name: result.company_name,
        intent: result.intent,
        unique_selling_points: result.unique_selling_points,
      });
    }
  };

  return (
    <>
      <Header />
      {show ? (
        <Content onBack={() => setShow(false)} onGenerate={generate} />
      ) : (
        <Info onEvent={trigger} />
      )}
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgcolor="rgba(0, 0, 0, 0.5)"
          zIndex="1000"
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
