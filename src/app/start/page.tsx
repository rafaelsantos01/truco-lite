import StartForm from "@/components/start/start-form";
import { Layout } from "@/components/ui/layout";
import { Title } from "@/components/ui/title";
import { CookieNames } from "@/types/cookies-name";
import { cookies } from "next/headers";

export default async function PageStart() {
  const teamOne = cookies().get(CookieNames.TEAM_ONE);
  const teamTwo = cookies().get(CookieNames.TEAM_TWO);

  if (teamOne?.value && teamTwo?.value) {
    return (
      <Layout>
        <div className="flex flex-col space-y-2 text-white justify-center items-center">
          <Title>Contador De truco</Title>
          <StartForm
            teamOne={JSON.parse(teamOne.value)}
            teamTwo={JSON.parse(teamTwo.value)}
          />
        </div>
      </Layout>
    );
  }

  //TODO: Pagina de error
  return (
    <Layout>
      <p>F</p>
    </Layout>
  );
}
