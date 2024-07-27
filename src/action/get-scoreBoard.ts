"use server";

import { CookieNames } from "@/types/cookies-name";
import { cookies } from "next/headers";

export async function GetScoreBoard() {
  const teamOne = cookies().get(CookieNames.TEAM_ONE);
  const teamTwo = cookies().get(CookieNames.TEAM_TWO);
}
