import { useMutation, useQueryClient } from "react-query";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

const deleteRingApi = async (id: string) => {
  await apiRings.deleteRing(id);
};

export const useDeleteRing = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>(deleteRingApi, {
    onSuccess: () => {
      toast.success("Anel apagado com sucesso", {
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
