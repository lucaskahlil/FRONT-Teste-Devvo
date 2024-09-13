import { useEffect, useState } from "react";
import { IRingDTOSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

export const useGetAllRings = () => {
  const [rings, setRings] = useState<IRingDTOSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const data = await apiRings.getAllRings();
        setRings(data);
        toast.success("Anéis carregados com sucesso");
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          toast.error(err.message);
        } else {
          setError("Erro desconhecido");
          toast.error("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRings();
  }, []);

  return { rings, loading, error };
};
