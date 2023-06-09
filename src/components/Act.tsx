import { styled } from "styled-components";
import { ActType } from "./types"
import { useBeats } from "@/hooks/useBeats";
import { Beat } from "./Beat";
import Link from "next/link";
import { useDeleteAct } from "@/hooks/useDeleteAct";
import React, { useCallback } from "react";
import { Button, Popconfirm, Space, Typography } from 'antd';
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

interface ActProps {
  act: ActType;
  count?: number;
  onDelete?: (actId: number) => void;
}

const BeatList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActActions = styled.div`
  display: none;
  flex-grow: 1;
  justify-content: flex-end;
`;

const ActContainer = styled.div`
  border-radius: 8px;
  background: #f8faff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
  padding: 10px;
  &:hover ${ActActions} {
    display: flex;
  }
`;

const ActHeader = styled.div`
  display: flex;
  justify-content: space-between
  align-items: center;
  margin-bottom: 10px;
`;

export const Act = ({act, count, onDelete}: ActProps): JSX.Element => {
  const { data: beats } = useBeats(act.id);
  const { deleteAct } = useDeleteAct(act.id);

  const handleDeleteAct = useCallback((e: React.MouseEvent | undefined) => {
    e?.preventDefault();
    deleteAct()
      .then(() => {
        onDelete?.(act.id);
      });
  }, [act, deleteAct, onDelete]);

  return (
    <ActContainer>
      <ActHeader>
        <Typography.Title level={3}>{count != null && `${count}. `}{act.name}</Typography.Title>
        <ActActions>
          <Space>
            <Link href={`/act/${act.id}`}>
              <Button type="default">
                <EyeOutlined/>View
              </Button>
            </Link>
            <Popconfirm
              title="Are you sure you want to remove this act?" 
              onConfirm={handleDeleteAct}
              okText="Yes"
            >
              <Button type="default" danger>
                <DeleteOutlined/>
              </Button>
            </Popconfirm>
          </Space>
        </ActActions>
      </ActHeader>
      <BeatList>
        {beats?.map(beat => {
          return <Beat act={act} beat={beat} key={beat.id}/>;
        })}
      </BeatList>
    </ActContainer>
  );
}