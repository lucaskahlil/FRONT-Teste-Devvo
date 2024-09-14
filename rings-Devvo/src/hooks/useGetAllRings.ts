import { IRingDTOSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const fetchRings = async (): Promise<IRingDTOSchema[]> => {
  const data = await apiRings.getAllRings();
  return data;
};

export const useGetAllRings = () => {
  return useQuery<IRingDTOSchema[], Error>("rings", fetchRings, {
    onSuccess: () => {
      toast.success("Anéis carregados com sucesso", {
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
    onError: (err: Error) => {
      toast.error(err.message || "Erro desconhecido", {
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
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
