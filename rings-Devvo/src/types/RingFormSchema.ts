import { z } from "zod";
import { TypeRingEnum } from "../enums";

export const RingFormSchema = z.object({
  name: z.string(),
  power: z.string(),
  ringBearer: z.string(),
  forger: z.string(),
  type: TypeRingEnum,
  image: z.string().url(),
});

export type IRingFormSchema = z.infer<typeof RingFormSchema>;
