"use client";

import Trophy from "@/components/ui/trophy";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Title } from "../ui/title";

interface WinnersFormProps {
  team: string;
}

export default function WinnersForm({ team }: WinnersFormProps) {
  const playSound = () => {
    const audio = new Audio("/mp3/pato.mp3");
    audio.play();
  };

  return (
    <section className="space-y-2">
      <div className="flex flex-col items-center justify-center ">
        <Button onClick={playSound} className="min-h-44">
          <div className="">
            <Image
              src="/images/patoSemFundo.png"
              alt="pato"
              width={200}
              height={200}
            />
          </div>
        </Button>

        <div className="text-white flex flex-col items-center justify-center ">
          <Title>Parabéns {team}</Title>
          <Title>Você é o vencedor</Title>
        </div>
      </div>

      <div>
        <Trophy />
      </div>

      <div className=" flex space-x-4">
        <Button className="w-full h-12" variant={"secondary"}>
          <Link href="/start">Jogar Novamente</Link>
        </Button>
        <Button className="w-full h-12" variant={"secondary"}>
          <Link href="/">Novo Jogo</Link>
        </Button>
      </div>
    </section>
  );
}
