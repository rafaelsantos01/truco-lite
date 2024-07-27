"use server";

import { CookieNames } from "@/types/cookies-name";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function clearParty() {
  cookies().delete(CookieNames.TEAM_ONE);
  cookies().delete(CookieNames.TEAM_TWO);

  redirect("/");
}
