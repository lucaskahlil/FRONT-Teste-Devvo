import { useEffect, useState } from "react";
import { IRingDTOSchema } from "../types";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

const ringsmock: IRingDTOSchema[] = [
  {
    id: 1,
    name: "Anel do Fogo",
    power: "Fogo",
    forger: "Gandalf",
    ringBearer: "Frodo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSw3Zm06mTNt5FU675Ilp_awLBGWOLkYsww&s",
    type: "HUMAN",
  },
  {
    id: 2,
    name: "Anel do Fogo 2",
    power: "Fogo",
    forger: "Gandalf",
    ringBearer: "Frodo",
    image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
    type: "HUMAN",
  },
  {
    id: 3,
    name: "Anel do Fogo 3",
    power: "Fogo",
    forger: "Gandalf",
    ringBearer: "Frodo",
    image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
    type: "HUMAN",
  },
  {
    id: 4,
    name: "Anel do Fogo 4",
    power: "Fogo",
    forger: "Gandalf",
    ringBearer: "Frodo",
    image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
    type: "HUMAN",
  },
  {
    id: 5,
    name: "Anel do Fogo 5",
    power: "Fogo",
    forger: "Gandalf",
    ringBearer: "Frodo",
    image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
    type: "HUMAN",
  },
  {
    id: 6,
    name: "Anel do Fogo 6",
    power: "Fogo",
    forger: "Gandalf",
    ringBearer: "Frodo",
    image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
    type: "HUMAN",
  },
];

export const useGetAllRings = () => {
  const [rings, setRings] = useState<IRingDTOSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [AllRingsError, setAllRingsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const data = await apiRings.getAllRings();
        setRings(ringsmock);
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
