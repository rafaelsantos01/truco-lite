"use client";

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
    <section>
      <div className="flex flex-col items-center justify-center ">
        <Button onClick={playSound} className="min-h-44">
          <div className="">
            <Image
              src="/images/patoSemFundo.png"
              alt="pato"
              width={180}
              height={180}
            />
          </div>
        </Button>

        <div className="text-white flex flex-col items-center justify-center ">
          <Title>Parabéns {team}</Title>
          <Title>Você é o vencedor</Title>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image src="/images/trofeu.png" alt="pato" width={180} height={180} />
      </div>

      <div className="flex space-x-6">
        <Button className="w-36 h-12" variant={"secondary"}>
          <Link href="/start">Jogar Novamente</Link>
        </Button>
        <Button className="w-36 h-12" variant={"secondary"}>
          <Link href="/">Novo Jogo</Link>
        </Button>
      </div>
    </section>
  );
}
