"use client";

import { CancelPartyRedirect } from "@/action/cancel-party";
import CounterForm from "../counter/counter-form";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface StartFormProps {
  teamOne: string;
  teamTwo: string;
}

export default function StartForm({ teamOne, teamTwo }: StartFormProps) {
  async function cancelParty() {
    await CancelPartyRedirect();
  }
  return (
    <section className="">
      <div className="flex space-x-10 ">
        <CounterForm team={teamOne} />
        <Separator orientation="vertical" className="h-auto bg-primary" />
        <CounterForm team={teamTwo} />
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
