import { useEffect, useState } from "react";
import { IRingDTOSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

export const useGetAllRings = () => {
  const [rings, setRings] = useState<IRingDTOSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [AllRingsError, setAllRingsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const data = await apiRings.getAllRings();
        setRings(data);
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
      } catch (err: unknown) {
        if (err instanceof Error) {
          setAllRingsError(err.message);
          toast.error(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRings();
  }, []);

  return { rings, loading, AllRingsError };
};
