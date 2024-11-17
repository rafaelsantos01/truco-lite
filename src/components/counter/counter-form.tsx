"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { redirect, useRouter } from "next/navigation";
import { UpdateScore } from "@/action/update-coreBoard";
import { toast } from "../ui/use-toast";
interface CounterFormProps {
  team: string;
  type: string;
}

export default function CounterForm({ team, type }: CounterFormProps) {
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  function handleIncrement(points: number) {
    speak(points, true);
    updateCounter(points);
  }

  async function updateCounter(points: number) {
    const newCounter = counter + points;

    if (newCounter >= 12 && counter < 12) {
      await handleWinCondition();
      window.speechSynthesis.cancel();
    }

    setCounter(newCounter);
  }


  async function handleWinCondition() {
    try {
      const team = localStorage.getItem(type);

      if (team) {
        const parsedTeam = JSON.parse(team);
        const newScore = parsedTeam.score + 1;

        localStorage.setItem(
          type,
          JSON.stringify({ ...parsedTeam, score: newScore })
        );

        setTimeout(() => {
          return router.push(`/winners?team=${parsedTeam.name}`);
        }, 500);
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao atualizar placar",
        variant: "destructive",
      });
    }
  }

  function handleDecrement(points: number) {
    speak(points, false);
    setCounter((prevCounter) => {
      const newCounter = prevCounter - points;
      return newCounter < 0 ? 0 : newCounter;
    });
  }

  function handleReset() {
    window.speechSynthesis.cancel();
    setCounter(0);
  }

  async function speak(qty: number, increment: boolean) {
    window.speechSynthesis.cancel();

    let pontos = "ponto";
    if (qty > 1) {
      pontos = "pontos";
    }

    let text = null;

    if (increment === true) {
      text = `Mais ${qty.toString()} ${pontos} para o time ${team}`;
    } else {
      text = `${qty.toString()} ${pontos} removidos do time ${team}`;
    }

    pontos = "ponto";
    if (counter > 1) {
      pontos = "pontos";
    }

    text = ` ${text} agora o time tem ${counter + qty} ${pontos}`;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";

    utterance.lang = "Google português do Brasil pt-BR";

    return window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="space-y-4 max-w-32">
      <div className="flex flex-col items-center text-white  text-center">
        <p className="text-8xl ">{counter}</p>
        <p className="font-bold">{team}</p>
      </div>
      <div className="space-x-2 flex justify-between">
        <div className="space-y-2 ">
          <Button
            disabled={counter >= 12}
            variant={"outline"}
            className="max-w-14 p-7 rounded-2xl text-black"
            onClick={() => handleIncrement(3)}
          >
            +3
          </Button>
          <Button
            disabled={counter >= 12}
            variant={"outline"}
            className="max-w-14 p-7 rounded-2xl text-black"
            onClick={() => handleDecrement(3)}
          >
            -3
          </Button>
        </div>

        <div className="space-y-2">
          <Button
            disabled={counter >= 12}
            variant={"outline"}
            className="max-w-14 p-7 rounded-2xl text-black"
            onClick={() => handleIncrement(1)}
          >
            +1
          </Button>
          <Button
            disabled={counter >= 12}
            variant={"outline"}
            className="max-w-14 p-7 rounded-2xl text-black"
            onClick={() => handleDecrement(1)}
          >
            -1
          </Button>
        </div>
      </div>
      <div className="flex">
        <Button
          className="p-7 rounded-2xl w-full text-black"
          variant={"outline"}
          onClick={handleReset}
        >
          Zerar
        </Button>
      </div>
    </div>
  );
}
