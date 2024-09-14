import { useMutation, useQueryClient } from "react-query";
import { IRingFormSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

type UpdateRingResponse = {
  name: string;
  power: string;
  ringBearer: string;
  forger: string;
  type: "HUMAN" | "ELF" | "DWARF" | "SAURON";
  image: string;
  _id: string;
};

const updateRingApi = async ({
  id,
  ring,
}: {
  id: string;
  ring: IRingFormSchema;
}): Promise<UpdateRingResponse> => {
  const data = await apiRings.updateRing(id, ring);
  return data;
};

export const useUpdateRing = () => {
  const queryClient = useQueryClient();

  return useMutation<
    UpdateRingResponse,
    Error,
    { id: string; ring: IRingFormSchema }
  >(updateRingApi, {
    onSuccess: () => {
      toast.success("Anel atualizado com sucesso", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      queryClient.invalidateQueries("rings");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Erro desconhecido", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  });
};
