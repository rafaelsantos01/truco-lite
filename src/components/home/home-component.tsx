"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { createTeam, type CreateTeam } from "@/schemas/create-team";
import { zodResolver } from "@hookform/resolvers/zod";
import { Description } from "@radix-ui/react-dialog";
import { Text } from "../ui/text";
import { CookieNames } from "@/types/cookies-name";
import { useRouter } from "next/navigation";

export default function HomeComponent() {
  const [isDialog, setIsDialog] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  const {
    register,
    control,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateTeam>({
    resolver: zodResolver(createTeam),
  });

  async function onSubmit() {
    setIsLoaded(true);
    const data = getValues();

    localStorage.setItem(
      CookieNames.TEAM_ONE,
      JSON.stringify({ name: data.teamOne, score: 0, type: "truco.team.one" })
    )


    localStorage.setItem(
      CookieNames.TEAM_TWO,
      JSON.stringify({ name: data.teamTwo, score: 0, type: "truco.team.two" })
    );

    setTimeout(() => {
      router.push("/party");
    }, 500);
  }

  return (
    <section>
      <div className="flex items-center justify-center">
        <Button
          className="bg-secondary"
          variant={"outline"}
          onClick={() => {
            setIsDialog(true);
          }}
        >
          COMEÇAR
        </Button>
      </div>

      <Dialog open={isDialog} onOpenChange={setIsDialog}>
        <DialogContent className="bg-secondary shadow-inner">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center font-bold text-2xl">
              Times
            </DialogTitle>
            <Description>Informe os nomes dos times!</Description>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label className="flex" htmlFor="time1">
                    Eles
                  </Label>
                  <Input placeholder="Eles" {...register("teamOne")} />
                  {errors.teamOne && (
                    <Text weight={"medium"} size={"base"} variant={"danger"}>
                      {errors.teamOne?.message}
                    </Text>
                  )}
                </div>

                <div className="space-y-1">
                  <Label className="flex" htmlFor="time2">
                    Nós
                  </Label>
                  <Input placeholder="Nós" {...register("teamTwo")} />
                  {errors.teamOne && (
                    <Text weight={"medium"} size={"base"} variant={"danger"}>
                      {errors.teamTwo?.message}
                    </Text>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-between">
                <Button
                  className="w-full p-6"
                  type="submit"
                  disabled={isLoaded || !isValid}
                >
                  Start
                </Button>
                <DialogClose asChild>
                  <Button
                    disabled={isLoaded}
                    className="min-w-40 p-6 "
                    variant={"link"}
                    onClick={() => {
                      setIsDialog(false);
                    }}
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
