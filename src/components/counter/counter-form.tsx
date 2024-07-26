"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface CounterFormProps {
  team: string;
}

export default function CounterForm({ team }: CounterFormProps) {
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  function handleIncrement(points: number) {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + points;
      if (newCounter >= 12) {
        router.push(`/winners?team=${team}`);
        return 12;
      }
      return newCounter;
    });
  }

  function handleDecrement(points: number) {
    setCounter((prevCounter) => {
      const newCounter = prevCounter - points;
      return newCounter < 0 ? 0 : newCounter;
    });
  }

  function handleReset() {
    setCounter(0);
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
            variant={"outline"}
            className="max-w-14 p-7 rounded-2xl text-black"
            onClick={() => handleIncrement(3)}
          >
            +3
          </Button>
          <Button
            variant={"outline"}
            className="max-w-14 p-7 rounded-2xl text-black"
            onClick={() => handleDecrement(3)}
          >
            -3
          </Button>
        </div>

        <div className="space-y-2">
          <Button
            variant={"outline"}
            className="max-w-14 p-7 rounded-2xl text-black"
            onClick={() => handleIncrement(1)}
          >
            +1
          </Button>
          <Button
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
