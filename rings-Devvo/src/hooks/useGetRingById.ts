import { useEffect, useState } from "react";
import { IRingDTOSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

export const useGetRingById = (id: number) => {
  const [ring, setRing] = useState<IRingDTOSchema | null>(null);
  const [isloadingRing, setisLoadingRing] = useState<boolean>(true);
  const [errorRing, setErrorRing] = useState<string | null>(null);

  useEffect(() => {
    const fetchRing = async () => {
      try {
        const data = await apiRings.getRingById(id);
        setRing(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorRing(err.message);
          toast.error(err.message);
        } else {
          setErrorRing("Erro desconhecido");
          toast.error("Erro desconhecido");
        }
      } finally {
        setisLoadingRing(false);
      }
    };

    fetchRing();
  }, [id]);

  return { ring, isloadingRing, errorRing };
};
