"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
interface CounterFormProps {
  team: string;
}

export default function CounterForm({ team }: CounterFormProps) {
  const [counter, setCounter] = useState(0);

  function handleIncrement(points: number) {
    speak(points, true);
    setCounter((prevCounter) => {
      const newCounter = prevCounter + points;
      if (newCounter >= 12) {
        window.speechSynthesis.cancel();
        redirect(`/winners?team=${team}`);
      }
      return newCounter;
    });
  }
  ("a");
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

    let pontos = "pontos";
    if (qty === 1) {
      pontos = "ponto";
    }

    let text = "Foi marcado";

    if (increment === true) {
      text = `Mais ${qty.toString()} ${pontos} para o time ${team}`;
    } else {
      text = `${qty.toString()} ${pontos} removidos do time ${team}`;
    }
    text = `, ${text} agora o time tem ${counter + qty} ${pontos}`;

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = window.speechSynthesis.getVoices()[0];
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
