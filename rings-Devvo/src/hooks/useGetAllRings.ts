import { useEffect, useState } from "react";
import { IRingDTOSchema } from "../types";
import { apiRings } from "../API/Rings";

export const useGetAllRings = () => {
  const [rings, setRings] = useState<IRingDTOSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const data = await apiRings.getAllRings();
        setRings(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRings();
  }, []);

  return { rings, loading, error };
};
