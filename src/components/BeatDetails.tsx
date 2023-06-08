import { styled } from "styled-components";
import { BeatType } from "./types";
import Link from "next/link";
import { useActId } from "@/hooks/useRouterQueryId";
import { useCallback } from "react";
import { useDeleteBeat } from "@/hooks/useDeleteBeat";
import { Button, Popconfirm, Space, Typography } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";

interface BeatProps {
  beat: BeatType;
  showDetails?: boolean;
}

const BeatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BeatActions = styled.div`
  display: none;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Container = styled.div`
  flex-grow: 1;
  padding: 10px;

  border-radius: 8px;
  background: #f8faff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0 ,0.1);

  &:hover ${BeatActions} {
    display: flex;
  }
`;



export const BeatDetails = ({beat}: BeatProps): JSX.Element => {
  const actId = useActId();

  const { deleteBeat } = useDeleteBeat(beat.id);
  const handleDeleteBeat = useCallback(() => {
    deleteBeat()
      .then(() => {
        // re-sync act data
      })
      .catch(() => {
        console.error('Getting a 405 method not allowed from the endpoint');
      });
  }, [deleteBeat]);
  
  return (
    <Container>
      <BeatHeader>
        <Typography.Title level={3}>{beat.time}</Typography.Title>
        <BeatActions>
          <Space>
            {actId != null && (
              <Link href={`/act/${actId}/beat/${beat.id}/edit`}>
                <Button type="default"><EditOutlined/>Edit</Button>
              </Link>
            )}
            <Popconfirm 
                title="Are you sure you want to delete this beat?" 
                onConfirm={handleDeleteBeat}
                okText="Yes"
              >
              <Button type="default" danger><CloseOutlined/>Remove</Button>
            </Popconfirm>
          </Space>
        </BeatActions>
      </BeatHeader>  
      <Typography.Title level={4}>{beat.name}</Typography.Title>
      <Typography.Paragraph>
        Notes: {beat.notes}
      </Typography.Paragraph>
      <Typography.Paragraph>
        Camera Angle: {beat.cameraAngle}
      </Typography.Paragraph>
      <Typography.Paragraph strong>
        {beat.content}
      </Typography.Paragraph>
    </Container>
  );
}