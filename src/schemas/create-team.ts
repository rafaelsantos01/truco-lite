import { z } from "zod";

export const createTeam = z.object({
  teamOne: z.string().min(3, { message: "Campo obrigatório" }),
  teamTwo: z.string().min(3, { message: "Campo obrigatório" }),
});

export type CreateTeam = z.infer<typeof createTeam>;
