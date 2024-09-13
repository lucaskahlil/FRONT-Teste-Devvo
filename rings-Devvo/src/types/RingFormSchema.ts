import { z } from "zod";
import { TypeRingEnum } from "../enums";

export const RingFormSchema = z.object({
  name: z.string(),
  power: z.string(),
  ringBearer: z.string(),
  forger: z.string(),
  type: TypeRingEnum,
  image: z.instanceof(File).refine(
    (file) => {
      const validExtensions = ["image/jpeg", "image/png"];
      return validExtensions.includes(file.type);
    },
    {
      message: "O arquivo deve ser uma imagem JPG ou PNG",
    }
  ),
});

export type IRingFormSchema = z.infer<typeof RingFormSchema>;
