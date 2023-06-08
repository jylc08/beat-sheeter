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
  HeaderTitle,
  HeaderActions,
  HeaderIcon,
} from '@/components/Header';
import { Content } from '@/components/Content';

const ActList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function BeetSheetPage() {
  // would add loading states and server side fetch
  // error handling
  const { data: acts } = useActs();

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
          <HeaderIcon/>
          <HeaderTitle/>
          <HeaderActions>
            <Link href="/act/new">
              <Button type="primary"><PlusOutlined/>Add New Act</Button>
            </Link>
          </HeaderActions>
        </Header>
        <Content>
          <Typography.Title>My Awesome Beat Sheet</Typography.Title>
          <Divider/>
          <Typography.Title level={2}>Acts</Typography.Title>
          <ActList>
            {acts?.map((act, index) => (
              <div key={act.id}>
                <Act act={act} count={index+1} key={act.id}/>
                {index < acts.length - 1 && <Divider/>}
              </div>
            ))}
          </ActList>
        </Content>
      </Layout>
    </>
  )
}
