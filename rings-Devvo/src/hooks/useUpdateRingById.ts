import { useState } from "react";
import { IRingDTOSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

export const useUpdateRing = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateRing = async (id: number, ring: IRingDTOSchema) => {
    setLoading(true);
    try {
      const data = await apiRings.updateRing(id, ring);
      toast.success("Anel atualizado com sucesso");
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error(err.message);
      } else {
        setError("Erro desconhecido");
        toast.error("Erro desconhecido");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateRing, loading, error };
};
