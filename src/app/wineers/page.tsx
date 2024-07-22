import { Layout } from "@/components/ui/layout";
import { Title } from "@/components/ui/title";
import WinnersForm from "@/components/wineers/wineer";

export default async function Winners() {
  return (
    <Layout>
      <div className="text-white flex flex-col items-center justify-center">
        <Title>Parabéns</Title>
        <Title>Você é o vencedor</Title>
      </div>
      <WinnersForm />
    </Layout>
  );
}
