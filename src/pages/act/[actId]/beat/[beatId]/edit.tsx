import { BeatForm } from "@/components/BeatForm";
import { Content } from "@/components/Content";
import { Header, HeaderActions, HeaderIcon, HeaderTitle } from "@/components/Header";
import { useBeat } from "@/hooks/useBeat";
import { EditBeatArgs } from "@/hooks/useCreateBeat";
import { useEditBeat } from "@/hooks/useEditBeat";
import { useActId, useBeatId } from "@/hooks/useRouterQueryId";
import { RollbackOutlined } from "@ant-design/icons";
import { Button, Divider, Layout, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";

const EditBeatPage = () => {
  const beatId = useBeatId();
  const actId = useActId();
  const router = useRouter();
  const { data: beat } = useBeat(beatId);
  const { editBeat } = useEditBeat(beatId);

  const handleSubmit = useCallback((editBeatData: EditBeatArgs) => {
    editBeat(editBeatData)
      .then(() => {
        router.push(`/act/${actId}`);
      });
  }, [actId]);

  const handleCancel = useCallback(() => {
    router.push(`/act/${actId}`);
  }, [router]);

  return (
    <Layout>
      <Header>
        <HeaderIcon/>
        <HeaderTitle/>
        <HeaderActions>
          <Link href={`/act/${actId}`}>
            <Button type="default"><RollbackOutlined/>Return To Act</Button>
          </Link>
        </HeaderActions>
      </Header>
      <Content>
        <Typography.Title>Edit Beat</Typography.Title>
        <Divider/>
        {beat != null && (
          <BeatForm beat={beat} onSubmit={handleSubmit} onCancel={handleCancel}/>
        )}
      </Content>
    </Layout>
  );
};

export default EditBeatPage;