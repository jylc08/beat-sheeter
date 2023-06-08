import { useCallback } from "react";
import { EditBeatArgs, useCreateBeat } from "@/hooks/useCreateBeat";
import { BeatForm } from "@/components/BeatForm";
import { Header, HeaderActions, HeaderLogo } from "@/components/Header";
import { useActId } from "@/hooks/useRouterQueryId";
import { useRouter } from "next/router";
import { Content } from "@/components/Content";
import Link from "next/link";
import { Button, Divider, Layout, Typography } from "antd";
import { RollbackOutlined } from "@ant-design/icons";

export default function NewBeatPage() {
  const actId = useActId();
  const router = useRouter();
  const { createNewBeat } = useCreateBeat(actId);

  const handleSubmit = useCallback((newBeatData: EditBeatArgs) => {
    createNewBeat(newBeatData)
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
        <HeaderLogo/>
        <HeaderActions>
          <Link href={`/act/${actId}`}>
            <Button type="default"><RollbackOutlined/>Return To Act</Button>
          </Link>
        </HeaderActions>
      </Header>
      <Content>
        <Typography.Title>Create New Beat</Typography.Title>
        <Divider/>
        <BeatForm
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </Content>
    </Layout>
  );
};