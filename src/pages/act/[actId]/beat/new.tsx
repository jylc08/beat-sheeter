import { useCallback, useState } from "react";
import { EditBeatArgs, useCreateBeat } from "@/hooks/useCreateBeat";
import { BeatForm } from "@/components/BeatForm";
import { useActId } from "@/hooks/useActId";
import { useRouter } from "next/router";

export default function NewBeatPage() {
  const actId = useActId();
  const router = useRouter();
  const { createNewBeat } = useCreateBeat(actId);

  const handleSubmit = useCallback((newBeatData: EditBeatArgs) => {
    console.log('handleSubmit newBeatData: ', newBeatData);
    createNewBeat(newBeatData)
      .then(() => {
        router.push(`/act/${actId}`);
      });
  }, [actId]);

  return (
    <>
      <h1>Create New Beat</h1>
      <BeatForm
        onSubmit={handleSubmit}
      />
    </>
  );
};