import { AxiosResponse } from "axios";
import { IRingDTOSchema, IRingFormSchema } from "../../types";
import { api } from "../api";

export const apiRings = {
  getAllRings: async (): Promise<IRingDTOSchema[]> => {
    try {
      const response: AxiosResponse<IRingDTOSchema[]> = await api.get("/rings");
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao buscar anéis");
    }
  },

  getRingById: async (RingId: number): Promise<IRingDTOSchema> => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.get(
        `/rings/${RingId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao buscar anel");
    }
  },

  createRing: async (newRing: IRingFormSchema): Promise<IRingFormSchema> => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.post(
        "/rings",
        newRing
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar anel");
    }
  },

  updateRing: async (
    RingId: number,
    updatedRing: IRingDTOSchema
  ): Promise<IRingDTOSchema> => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.put(
        `/rings/${RingId}`,
        updatedRing
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao atualizar anel");
    }
  },

  deleteRing: async (RingId: number): Promise<void> => {
    try {
      await api.delete(`/rings/${RingId}`);
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao deletar anel");
    }
  },
};
