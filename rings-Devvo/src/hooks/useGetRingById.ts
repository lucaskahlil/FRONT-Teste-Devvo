import { useEffect, useState } from "react";
import { IRingDTOSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

export const useGetRingById = (id: number) => {
  const [ring, setRing] = useState<IRingDTOSchema | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRing = async () => {
      try {
        const data = await apiRings.getRingById(id);
        setRing(data);
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

    fetchRing();
  }, [id]);

  return { ring, loading, error };
};
