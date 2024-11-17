"use client";

import StartForm from "@/components/start/start-form";
import { Layout } from "@/components/ui/layout";
import { CookieNames } from "@/types/cookies-name";
import { useRouter } from "next/navigation";

export default function PageStart() {
  const router = useRouter();

  const teamOne = localStorage.getItem(CookieNames.TEAM_ONE);
  const teamTwo = localStorage.getItem(CookieNames.TEAM_TWO);

  const parsedTeamOne = teamOne ? JSON.parse(teamOne) : null;
  const parsedTeamTwo = teamTwo ? JSON.parse(teamTwo) : null;
  console.log(parsedTeamOne, parsedTeamTwo);
  if (parsedTeamOne && parsedTeamTwo) {
    return (
      <Layout>
        <div className="flex flex-col text-white justify-center items-center">
          <StartForm teamOne={parsedTeamOne} teamTwo={parsedTeamTwo} />
        </div>
      </Layout>
    );
  }

  //TODO: Pagina de error
  return router.push("/");
}
