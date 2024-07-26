import { Layout } from "@/components/ui/layout";
import WinnersForm from "@/components/winners/winners";

interface WinnersProps {
  searchParams: { team: string };
}

export default function Winners({ searchParams }: WinnersProps) {
  return (
    <Layout className="">
      <WinnersForm team={searchParams.team || ""} />
    </Layout>
  );
}
