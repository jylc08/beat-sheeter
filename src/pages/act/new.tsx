import { useCallback, useState } from "react";
import { useCreateAct } from "@/hooks/useCreateAct";
import { useRouter } from "next/router";

export default function NewActPage() {
  const [actName, setActName] = useState<string>();
  const { createNewAct } = useCreateAct();
  const router = useRouter();

  const onNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setActName(e.target.value);
  },[])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (actName == null) {
      return;
    }

    createNewAct(actName)
      .then(() => {
        router.push('/');
      });
  }, [actName]);

  const isDisabled = actName == null || actName?.length === 0;

  return (
    <>
      <h1>Create New Act</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="actName">Act Name:</label>
        <input type="text" name="actName" onChange={onNameChange}/>
        <input type="submit" value="Submit" disabled={isDisabled}/>
      </form>
    </>
  );
};