import { Beat } from "@/components/Beat";
import { useAct } from "@/hooks/useAct";
import { useActId } from "@/hooks/useRouterQueryId";
import { useBeats } from "@/hooks/useBeats";
import Link from "next/link";
import {
  Header,
  HeaderTitle,
  HeaderActions,
  HeaderIcon,
} from '@/components/Header';
import { Button, Divider, Layout, Space, Typography } from "antd";
import { PlusOutlined, RollbackOutlined } from "@ant-design/icons";
import { Content } from "@/components/Content";

export default function ActPage() {
  const actId = useActId();
  const { data: beats } = useBeats(actId);
  const { data: act } = useAct(actId);

  return (
    <Layout>
      <Header>
        <HeaderIcon/>
        <HeaderTitle/>
        <HeaderActions>
          <Space>
            <Link href="/">
              <Button type="default"><RollbackOutlined/>Return To Beatsheet</Button>
            </Link>
            <Link href={`/act/${actId}/beat/new`}>
              <Button type="primary"><PlusOutlined/>Add New Beat</Button>
            </Link>
          </Space>
        </HeaderActions>
      </Header>
      <Content>
        {act != null && (<Typography.Title>Act: {act?.name}</Typography.Title>)}
        <Divider/>
        <Typography.Title level={2}>Beats</Typography.Title>
        {beats?.map(beat => {
          return <Beat beat={beat} showDetails key={beat.id}/>;
        })}
      </Content>
    </Layout>
  );
}