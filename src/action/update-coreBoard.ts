"use server";

import { cookies } from "next/headers";

export async function UpdateScore(type: string) {
  const team = cookies().get(type);

  if (team) {
    const newScore = JSON.parse(team.value).score + 1;

    cookies().set(
      type,
      JSON.stringify({ ...JSON.parse(team.value), score: newScore })
    );
  }
}
