import { Layout } from "@/components/ui/layout";
import { Title } from "@/components/ui/title";
import WinnersForm from "@/components/winners/winners";

export default async function Winners({
  params,
}: {
  params: { team: string };
}) {
  const { team } = params;

  return (
    <Layout className="flex-grow-0">
      <WinnersForm team={team} />
    </Layout>
  );
}
