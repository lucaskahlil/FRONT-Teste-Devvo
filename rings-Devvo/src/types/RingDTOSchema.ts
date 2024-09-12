import { z } from "zod";
import { TypeRingEnum } from "../enums";

export const RingDTOSchema = z.object({
  id: z.number().int().gt(0),
  name: z.string(),
  power: z.string(),
  ringBearer: z.string(),
  forger: z.string(),
  type: TypeRingEnum,
  image: z.string().url(),
});

export type IRingDTOSchema = z.infer<typeof RingDTOSchema>;
