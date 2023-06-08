import { styled } from "styled-components";
import { ActType, BeatType } from "./types"
import { useBeats } from "@/hooks/useBeats";
import { Beat } from "./Beat";
import Link from "next/link";
import { useDeleteAct } from "@/hooks/useDeleteAct";
import { useCallback } from "react";
import { Button, Space, Typography } from 'antd';
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";

interface ActProps {
  act: ActType;
  count?: number;
}

const BeatList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ActContainer = styled.div`
  border-radius: 20px;
`;

const ActHeader = styled.div`
  display: flex;
  justify-content: space-between
  align-items: center;
`;

const ActActions = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const Act = ({act, count}: ActProps): JSX.Element => {
  const { data: beats } = useBeats(act.id);
  const { deleteAct } = useDeleteAct(act.id);

  const handleDeleteAct = useCallback(() => {
    deleteAct()
      .then(() => {
        // re-sync acts data
      });
  }, [deleteAct]);
    
  return (
    <ActContainer>
      <ActHeader>
        <Typography.Title level={3}>{count != null && `${count}. `}{act.name}</Typography.Title>
        <ActActions>
          <Space>
            <Link href={`/act/${act.id}`}>
              <Button><SearchOutlined/>View/Edit</Button>
            </Link>
            <Button danger onClick={handleDeleteAct}><DeleteOutlined/></Button>
          </Space>
        </ActActions>
      </ActHeader>
      <BeatList>
        {beats?.map(beat => {
          return <Beat beat={beat} key={beat.id}/>;
        })}
      </BeatList>
      
    </ActContainer>
  );
}