"use server";

import { CookieNames } from "@/types/cookies-name";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface nameTeam {
  teamOne: string;
  teamTwo: string;
}

export default async function createParty({ teamOne, teamTwo }: nameTeam) {
  cookies().delete(CookieNames.TEAM_ONE);
  cookies().delete(CookieNames.TEAM_TWO);

  cookies().set(
    CookieNames.TEAM_ONE,
    JSON.stringify({ name: teamOne, score: 0, type: "truco.team.one" })
  );

  cookies().set(
    CookieNames.TEAM_TWO,
    JSON.stringify({ name: teamTwo, score: 0, type: "truco.team.two" })
  );

  redirect("/start");
}
