import { useAct } from "@/hooks/useAct";
import { useActId } from "@/hooks/useRouterQueryId";
import { useBeats } from "@/hooks/useBeats";
import Link from "next/link";
import {
  Header,
  HeaderActions,
  HeaderLogo,
} from '@/components/Header';
import { Button, Divider, Layout, Space, Typography } from "antd";
import { PlusOutlined, RollbackOutlined } from "@ant-design/icons";
import { Content, ContentHeader } from "@/components/Content";
import { BeatDetails } from "@/components/BeatDetails";
import { styled } from "styled-components";

const BeatList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
`;

export default function ActPage() {
  const actId = useActId();
  const { data: beats } = useBeats(actId);
  const { data: act } = useAct(actId);

  return (
    <Layout>
      <Header>
        <HeaderLogo/>
        <HeaderActions>
          <Link href="/">
            <Button type="default"><RollbackOutlined/>Return To Beatsheet</Button>
          </Link>
        </HeaderActions>
      </Header>
      <Content>
        {act != null && (<Typography.Title>Act: {act?.name}</Typography.Title>)}
        <Divider/>
        <ContentHeader>
          <Typography.Title level={2}>Beats</Typography.Title>
          <Link href={`/act/${actId}/beat/new`}>
            <Button type="primary"><PlusOutlined/>Add New Beat</Button>
          </Link>
        </ContentHeader>
        <BeatList>
          {beats?.map(beat => {
            return <BeatDetails beat={beat}/>;
          })}
        </BeatList>
      </Content>
    </Layout>
  );
}