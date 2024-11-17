"use client";

import { useEffect, useState } from "react";
import StartForm from "@/components/start/start-form";
import { Layout } from "@/components/ui/layout";
import { CookieNames } from "@/types/cookies-name";

export default function PageStart() {
  const [parsedTeamOne, setParsedTeamOne] = useState(null);
  const [parsedTeamTwo, setParsedTeamTwo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const teamOne = localStorage.getItem(CookieNames.TEAM_ONE);
    const teamTwo = localStorage.getItem(CookieNames.TEAM_TWO);

    if (teamOne) {
      setParsedTeamOne(JSON.parse(teamOne));
    }
    if (teamTwo) {
      setParsedTeamTwo(JSON.parse(teamTwo));
    }

    setLoading(false);
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (parsedTeamOne && parsedTeamTwo) {
    return (
      <Layout>
        <div className="flex flex-col text-white justify-center items-center">
          <StartForm teamOne={parsedTeamOne} teamTwo={parsedTeamTwo} />
        </div>
      </Layout>
    );
  }

  return null;
}
