import { z } from "zod";

export const typeRingEnum = ["HUMAN", "ELF", "DWARF", "SAURON"] as const;

export const TypeRingEnum = z.enum(typeRingEnum).catch((e) => e.input);

export type TypeRingEnum = z.infer<typeof TypeRingEnum>;
