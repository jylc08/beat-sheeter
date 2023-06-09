import Head from 'next/head'
import styled from 'styled-components';
import { Act } from '@/components/Act';
import { useActs } from '@/hooks/useActs';
import Link from 'next/link';
import { 
  Layout, 
  Typography, 
  Divider,
  Button,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  Header,
  HeaderLogo,
} from '@/components/Header';
import { Content, ContentHeader } from '@/components/Content';
import { useCallback } from 'react';

const ActList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
`;

export default function BeetSheetPage() {
  const { data: acts, mutate } = useActs();

  const handleDelete = useCallback((deletedActId: number) => {
    mutate(acts.filter(act => act.id !== deletedActId));
  }, [acts, mutate]);

  return (
    <>
      <Head>
        <title>My Awesome Beat Sheet</title>
        <meta name="description" content="Beet Sheet Editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header>
          <HeaderLogo/>
        </Header>
        <Content>
          <Typography.Title>My Awesome Beat Sheet</Typography.Title>
          <Divider/>
          <ContentHeader>
            <Typography.Title level={2}>Acts</Typography.Title>
            <Link href="/act/new">
              <Button type="primary"><PlusOutlined/>New Act</Button>
            </Link>
          </ContentHeader>
          <ActList>
            {acts?.map((act, index) => (
              <Act act={act} count={index+1} key={act.id} onDelete={handleDelete}/>
            ))}
          </ActList>
        </Content>
      </Layout>
    </>
  )
}
