import Copas from "@/components/icons/copas";

import Ouros from "@/components/icons/ouros";
import Paus from "@/components/icons/paus";
import { Title } from "@/components/ui/title";
import HomeComponent from "@/components/home/home-component";
import { Layout } from "@/components/ui/layout";
import Espadas from "@/components/icons/espadas";

export default async function Home() {
  return (
    <Layout>
      <div className="space-y-1">
        <section className="flex space-x-1">
          <Paus />
          <Copas />
          <Ouros />
          <Espadas />
        </section>

        <section className="flex flex-col items-center justify-center text-secondary">
          <Title>CONTADOR</Title>
          <Title>DE TRUCO</Title>
        </section>

        <HomeComponent />
      </div>
    </Layout>
  );
}
