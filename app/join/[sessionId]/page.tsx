import BuyerPerceptionApp from "../../../components/assessment/BuyerPerceptionApp";

export default async function JoinSessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const { sessionId } = await params;
  return <BuyerPerceptionApp initialJoinSessionId={sessionId} />;
}

