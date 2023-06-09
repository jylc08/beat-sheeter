import { styled } from "styled-components";
import { BeatType } from "./types";
import { Popover, Space, Typography } from "antd";

interface BeatProps {
  beat: BeatType;
}

const Container = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #d0d4e4;
  }
  padding: 12px 25px;
  display: grid;
  grid-template-columns: 100px 1fr;
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

export const Beat = ({beat}: BeatProps): JSX.Element => {
  const hoverContent = (
    <>
      <Typography.Paragraph><Typography.Text strong>Notes:</Typography.Text> {beat.notes}</Typography.Paragraph>
      <Typography.Paragraph><Typography.Text strong>Camera Angle:</Typography.Text> {beat.cameraAngle}</Typography.Paragraph>
    </>
  );
  
  return (
    <Popover title={beat.content} content={hoverContent} trigger="hover">
      <Container>
        <BeatTime>{beat.time}</BeatTime>
        <BeatInfo>
          <BeatName>{beat.name}</BeatName>
          <BeatContent>{beat.content}</BeatContent>
        </BeatInfo>
      </Container>
    </Popover>
  );
}