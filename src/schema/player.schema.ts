import { boolean, object, string, TypeOf } from "zod";

export const createPlayerSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
  }),
});

export type CreatePlayerInput = TypeOf<typeof createPlayerSchema>;
