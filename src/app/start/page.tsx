import StartForm from "@/components/start/start-form";
import { Layout } from "@/components/ui/layout";
import { Title } from "@/components/ui/title";

export default function PageStart() {
  return (
    <Layout>
      <div className="flex flex-col space-y-11 text-white justify-center items-center">
        <Title>Contador De truco</Title>
        <StartForm />
      </div>
    </Layout>
  );
}
