import { styled } from "styled-components";
import { ActType, BeatType } from "./types";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Button } from "antd";

interface BeatProps {
  beat: BeatType;
  act: ActType;
}

const EditLink = styled(Link)`
  display: none;
`;

const Container = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #d0d4e4;
  }
  padding: 12px 25px;
  display: grid;
  grid-template-columns: 100px 1fr 50px;

  &:hover {
    ${EditLink} {
      display: block;
    }
  }
`;

const BeatTime = styled.div`
  color: #0073ea;
  font-weight: 700;
`;

const BeatName = styled.span`
  color: #323338;
  margin-bottom: 8px;
  font-weight: 700;
`;

const BeatContent = styled.span`
  color: #64748b;
`;

const BeatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BeatActions = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 50px;
`;

export const Beat = ({act, beat}: BeatProps): JSX.Element => {
  return (
    <Container>
      <BeatTime>{beat.time}</BeatTime>
      <BeatInfo>
        <BeatName>{beat.name}</BeatName>
        <BeatContent>{beat.content}</BeatContent>
      </BeatInfo>
      <BeatActions>
        <EditLink href={`/act/${act.id}/beat/${beat.id}/edit`}>
          <Button type="default"><EditOutlined/></Button>
        </EditLink>
      </BeatActions>
    </Container>
  );
}