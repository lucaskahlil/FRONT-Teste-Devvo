import { useState } from "react";
import { apiRings } from "../API/Rings";
import { toast } from "react-toastify";

export const useDeleteRing = () => {
  const [isDeleteloading, setIsDeleteLoading] = useState<boolean>(false);
  const [errorDelete, setErrorDelete] = useState<string | null>(null);

  const deleteRing = async (id: number) => {
    setIsDeleteLoading(true);
    try {
      await apiRings.deleteRing(id);
      toast.success("Anel deletado com sucesso");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorDelete(err.message);
        toast.error(err.message);
      } else {
        setErrorDelete("Erro desconhecido");
        toast.error("Erro desconhecido");
      }
      throw err;
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return { deleteRing, isDeleteloading, errorDelete };
};
