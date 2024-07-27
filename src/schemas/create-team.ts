import { z } from "zod";

export const createTeam = z.object({
  teamOne: z
    .string()
    .min(3, { message: "Campo obrigatório" })
    .max(20, { message: "Máximo de 20 caracteres" }),
  teamTwo: z
    .string()
    .min(3, { message: "Campo obrigatório" })
    .max(20, { message: "Máximo de 20 caracteres" }),
});

export type CreateTeam = z.infer<typeof createTeam>;
