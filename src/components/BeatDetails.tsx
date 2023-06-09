import { styled } from "styled-components";
import { BeatType } from "./types";
import Link from "next/link";
import { useActId } from "@/hooks/useRouterQueryId";
import { useCallback } from "react";
import { useDeleteBeat } from "@/hooks/useDeleteBeat";
import { Button, Popconfirm, Space, Typography } from "antd";
import { BookOutlined, CloseOutlined, DeleteOutlined, EditOutlined, VideoCameraOutlined } from "@ant-design/icons";

interface BeatProps {
  beat: BeatType;
  showDetails?: boolean;
  onDelete?: (beatId: number) => void;
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
  padding: 10px;

  border-radius: 8px;
  background: #f8faff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0 ,0.1);

  // display: grid;
  // grid-template-columns: 100px 1fr 

  &:hover ${BeatActions} {
    display: flex;
  }
`;

const BeatTime = styled(Typography.Title).attrs({ level: 3 })`
  &.ant-typography {
    color: #0073ea;
    font-weight: 700;
  }
`;

const BeatName = styled(Typography.Title).attrs({ level: 4 })`
  &.ant-typography {
    color: #323338;
    margin-bottom: 0;
  }
`;

const BeatInfo = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BeatContent = styled(Typography.Paragraph)`
  color: #323338;
`;



export const BeatDetails = ({beat, onDelete}: BeatProps): JSX.Element => {
  const actId = useActId();

  const { deleteBeat } = useDeleteBeat(beat.id);
  const handleDeleteBeat = useCallback(() => {
    deleteBeat()
      .then(() => {
        onDelete?.(beat.id);
      })
      .catch(() => {
        console.error('Getting a 405 method not allowed from the endpoint');
      });
  }, [beat, deleteBeat, onDelete]);
  
  return (
    <Container>
      <BeatHeader>
        <BeatTime>{beat.time}</BeatTime>
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
              <Button type="default" danger><DeleteOutlined/></Button>
            </Popconfirm>
          </Space>
        </BeatActions>
      </BeatHeader>  
      <BeatInfo>
        <BeatName>{beat.name}</BeatName>
        <div>
          <BookOutlined/>{' '}Notes: {beat.notes}
        </div>
        <div>
          <VideoCameraOutlined/>{' '}Camera Angle: {beat.cameraAngle}
        </div>
        <BeatContent>{beat.content}</BeatContent>
      </BeatInfo>
    </Container>
  );
}