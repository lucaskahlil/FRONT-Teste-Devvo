import { useMutation, useQueryClient } from "react-query";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";
import { IRingFormSchema } from "../types"; // Ajuste conforme sua definição de tipos

// Função para criar um anel
const createRingApi = async (ring: IRingFormSchema): Promise<void> => {
  await apiRings.createRing(ring);
};

export const useCreateRing = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, IRingFormSchema>(createRingApi, {
    onSuccess: () => {
      toast.success("Anel criado com sucesso", {
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
