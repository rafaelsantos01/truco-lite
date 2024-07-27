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
        <div className="flex flex-col  text-white justify-center items-center">
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
