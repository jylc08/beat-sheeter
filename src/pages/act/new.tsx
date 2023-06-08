import { useCallback, useState } from "react";
import { useCreateAct } from "@/hooks/useCreateAct";
import { useRouter } from "next/router";
import { Layout, Button, Form, Input, Typography, Divider, Space } from "antd";
import {
  Header,
  HeaderTitle,
  HeaderActions,
  HeaderIcon,
} from '@/components/Header';
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";
import { Content } from "@/components/Content";

export default function NewActPage() {
  const [actName, setActName] = useState<string>();
  const { createNewAct } = useCreateAct();
  const router = useRouter();

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setActName(e.target.value);
  },[])

  const handleSubmit = useCallback(() => {
    if (actName == null) {
      return;
    }

    createNewAct(actName)
      .then(() => {
        router.push('/');
      });
  }, [actName]);

  const handleCancel = useCallback(() => {
    router.push('/');
  }, [router]);

  const isDisabled = actName == null || actName?.length === 0;

  return (
    <Layout>
      <Header>
        <HeaderIcon/>
        <HeaderTitle/>
        <HeaderActions>
          <Link href="/">
            <Button type="default"><RollbackOutlined/>Return To Beatsheet</Button>
          </Link>
        </HeaderActions>
      </Header>
      <Content>
        <Typography.Title>Create New Act</Typography.Title>
        <Divider/>
        <Form onFinish={handleSubmit}>
          <Form.Item label="Act Name:" required>
            <Input type="text" onChange={handleNameChange} value={actName}/>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="default" onClick={handleCancel}>Cancel</Button>
              <Button type="primary" htmlType="submit" disabled={isDisabled}>Save</Button>
            </Space>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};