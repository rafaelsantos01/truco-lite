"use client";

import { CancelPartyRedirect } from "@/action/cancel-party";
import CounterForm from "../counter/counter-form";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Scoreboard from "./scoreboard";
import { useEffect, useState } from "react";
import speak from "@/utils/message-six-points";
import { useRouter } from "next/navigation";

interface CookiesType {
  name: string;
  score: number;
  type: string;
}

interface StartFormProps {
  teamOne: CookiesType;
  teamTwo: CookiesType;
}

export default function StartForm({ teamOne, teamTwo }: StartFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  async function cancelParty() {
    await localStorage.clear();
    return router.push("/");
  }

  return (
    <section className="">
      {teamOne && teamTwo && <Scoreboard teamOne={teamOne} teamTwo={teamTwo} />}
      <Separator orientation="horizontal" className="" />
      <div className="flex space-x-10 mt-4">
        <CounterForm team={teamOne.name} type={teamOne.type} />
        <Separator orientation="vertical" className="h-auto bg-primary" />
        <CounterForm team={teamTwo.name} type={teamTwo.type} />
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <Button
          className="w-full p-7 rounded-2xl text-black"
          variant={"outline"}
          onClick={() => {
            cancelParty();
          }}
        >
          Cancelar Partida
        </Button>
      </div>
    </section>
  );
}
