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
import { useRouter } from "next/navigation";
import createParty from "@/action/create-party";

export default function HomeComponent() {
  const [isDialog, setIsDialog] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
    await createParty(data);
  }

  return (
    <section>
      <div className="flex items-center justify-center">
        <Button
          variant={"outline"}
          onClick={() => {
            setIsDialog(true);
          }}
        >
          COMEÇAR
        </Button>
      </div>

      <Dialog open={isDialog} onOpenChange={setIsDialog}>
        <DialogContent className=" shadow-inner">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center font-bold text-2xl">
              Times
            </DialogTitle>
            <Description>Informe os nomes dos times!</Description>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label className="flex" htmlFor="time1">
                    Time 1
                  </Label>
                  <Input placeholder="Azul" {...register("teamOne")} />
                  {errors.teamOne && (
                    <Text weight={"medium"} size={"base"} variant={"danger"}>
                      {errors.teamOne?.message}
                    </Text>
                  )}
                </div>

                <div className="space-y-1">
                  <Label className="flex" htmlFor="time2">
                    Time 2
                  </Label>
                  <Input placeholder="Rosa" {...register("teamTwo")} />
                  {errors.teamOne && (
                    <Text weight={"medium"} size={"base"} variant={"danger"}>
                      {errors.teamTwo?.message}
                    </Text>
                  )}
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <Button
                  className="min-w-40 p-6"
                  type="submit"
                  disabled={isLoaded}
                >
                  Start
                </Button>
                <DialogClose asChild>
                  <Button
                    disabled={isLoaded}
                    className="min-w-40 p-6 "
                    variant={"destructive"}
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
