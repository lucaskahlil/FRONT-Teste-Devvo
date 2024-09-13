import { useState } from "react";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

export const useDeleteRing = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteRing = async (id: number) => {
    setLoading(true);
    try {
      await apiRings.deleteRing(id);
      toast.success("Anel deletado com sucesso");
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

  return { deleteRing, loading, error };
};
