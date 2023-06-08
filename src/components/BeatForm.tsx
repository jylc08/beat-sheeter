import { BeatType } from "./types"
import { useCallback, useState } from "react";
import { EditBeatArgs } from "@/hooks/useCreateBeat";
import { Button, Form, Input, Space } from "antd";

interface BeatFormProps {
  onSubmit: (beatArgs: EditBeatArgs) => void;
  onCancel: () => void;
  beat?: BeatType;
}

export function BeatForm({onCancel, onSubmit, beat}: BeatFormProps): JSX.Element {
  const [beatName, setBeatName] = useState<string>(beat?.name ?? '');
  const [beatContent, setBeatContent] = useState<string>(beat?.content ?? '');
  const [beatCameraAngle, setBeatCameraAngle] = useState<string>(beat?.cameraAngle ?? '');
  const [beatNotes, setBeatNotes] = useState<string>(beat?.notes ?? '');
  const [beatTime, setBeatTime] = useState<string>(beat?.time ?? '');

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBeatName(e.target.value);
  },[]);
  const handleContentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBeatContent(e.target.value);
  },[]);
  const handleCameraAngleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBeatCameraAngle(e.target.value);
  },[]);
  const handleNotesChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBeatNotes(e.target.value);
  },[]);
  const handleTimeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBeatTime(e.target.value);
  },[]);

  const handleSubmit = useCallback(() => {
    if (beatName == null || beatContent == null || beatCameraAngle == null || beatNotes == null || beatTime == null) {
      return;
    }

    const beatData: EditBeatArgs = {
      cameraAngle: beatCameraAngle,
      name: beatName,
      content: beatContent,
      notes: beatNotes,
      time: beatTime,
    };

    onSubmit(beatData);
  }, [beatCameraAngle, beatName, beatContent, beatNotes, beatTime]);

  const isDisabled = (
    beatName == null || beatName?.length === 0 ||
    beatContent == null || beatContent?.length === 0 ||
    beatCameraAngle == null || beatCameraAngle?.length === 0 ||
    beatNotes == null || beatNotes?.length === 0 ||
    beatTime == null || beatTime?.length === 0
  );

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Name" required>
        <Input type="text" onChange={handleNameChange} value={beatName}/>
      </Form.Item>
      <Form.Item label="Content" required>
        <Input type="text" onChange={handleContentChange} value={beatContent}/>
      </Form.Item>
      <Form.Item label="Camera Angle" required>
        <Input type="text" onChange={handleCameraAngleChange} value={beatCameraAngle}/>
      </Form.Item>
      <Form.Item label="Notes" required>
        <Input type="text" onChange={handleNotesChange} value={beatNotes}/>
      </Form.Item>
      <Form.Item label="Time" required>
        <Input type="text" onChange={handleTimeChange} value={beatTime}/>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="default" onClick={onCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit" disabled={isDisabled}>Save</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}