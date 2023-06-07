import { useCallback, useState } from "react";
import { BeatType } from "./types"
import { EditBeatArgs } from "@/hooks/useCreateBeat";

interface BeatFormProps {
  onSubmit: (beatArgs: EditBeatArgs) => void;
  beat?: BeatType;
}

export function BeatForm({onSubmit, beat}: BeatFormProps): JSX.Element {
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

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="beatName">Beat Name:</label>
        <input type="text" name="beatName" onChange={handleNameChange}/>
      </div>
      <div>
        <label htmlFor="beatContent">Beat Content:</label>
        <input type="text" name="beatContent" onChange={handleContentChange}/>
      </div>
      <div>
        <label htmlFor="beatCameraAngle">Beat Camera Angle:</label>
        <input type="text" name="beatCameraAngle" onChange={handleCameraAngleChange}/>
      </div>
      <div>
        <label htmlFor="beatNotes">Beat Notes:</label>
        <input type="text" name="beatNotes" onChange={handleNotesChange}/>
      </div>
      <div>
        <label htmlFor="beatTime">Beat Time:</label>
        <input type="text" name="beatTime" onChange={handleTimeChange}/>
      </div>
      <div>
        <input type="submit" value="Submit" disabled={isDisabled}/>
      </div>
    </form>
  );
}