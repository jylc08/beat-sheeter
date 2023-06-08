import { Beat } from "@/components/Beat";
import { useBeat } from "@/hooks/useBeat";
import { useActId, useBeatId } from "@/hooks/useRouterQueryId";
import Link from "next/link";

const ViewBeatPage = () => {
  const beatId = useBeatId();
  const actId = useActId();
  const { data: beat } = useBeat(beatId);

  return (
    <>
      <h1>View Beat Page</h1>
      {beat != null && (
        <>
          <div>Name: {beat.name}</div>
          <div>Content: {beat.content}</div>
          <div>Time: {beat.time}</div>
          <div>Notes: {beat.notes}</div>
          <div>Camera Angle: {beat.cameraAngle}</div>
        </>
      )}
      {actId != null && (
        <Link href={`/act/${actId}/beat/${beat.id}/edit`}>
          <button>Edit Beat</button>
        </Link>
      )}
    </>
  );
};

export default ViewBeatPage;
