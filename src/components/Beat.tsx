import { styled } from "styled-components";
import { BeatType } from "./types";
import { Popover, Space, Typography } from "antd";

interface BeatProps {
  beat: BeatType;
}

const Container = styled.div`
  border: 1px solid #dbe0ec;
  // color: #6b6c6c;
  background-color: #f0f4ff;
  flex-grow: 1;
  padding: 5px 25px;
  // font-weight: 600;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const BeatTime = styled.div`
  .ant-typography {
  }
  color: #3d8ada;
  font-weight: 500;
`;

const BeatName = styled.div`
color: #64748b;
  .ant-typography {
  }
  font-weight: 500;
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
        <Space>
          <BeatTime>{beat.time}</BeatTime>
          <BeatName>{beat.name}</BeatName>
        </Space>
      </Container>
    </Popover>
  );
}