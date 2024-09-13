import { useState } from "react";
import { IRingFormSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

export const useCreateRing = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createRing = async (ring: IRingFormSchema) => {
    setLoading(true);
    try {
      const data = await apiRings.createRing(ring);
      toast.success("Anel criado com sucesso");
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error(`${err.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        setError("Erro desconhecido");
        toast.error("Error desconhecido", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createRing, loading, error };
};
