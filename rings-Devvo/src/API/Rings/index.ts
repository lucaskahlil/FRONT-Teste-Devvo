import { AxiosError, AxiosResponse } from "axios";
import { IRingDTOSchema, IRingFormSchema } from "../../types";
import { api } from "../api";

export const apiRings = {
  getAllRings: async (): Promise<IRingDTOSchema[]> => {
    try {
      const response: AxiosResponse<IRingDTOSchema[]> = await api.get("/ring");
      return response.data;
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message || "Erro ao buscar anéis");
      }
      throw new Error("Erro ao buscar anéis");
    }
  },

  getRingById: async (RingId: string): Promise<IRingDTOSchema> => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.get(
        `/ring/${RingId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message || "Erro ao buscar anel");
      }
      throw new Error("Erro ao buscar anel");
    }
  },

  createRing: async (newRing: IRingFormSchema): Promise<IRingFormSchema> => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.post(
        "/ring",
        newRing
      );
      return response.data;
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message || "Erro ao criar anel");
      }
      throw new Error("Erro ao criar anel");
    }
  },

  updateRing: async (
    RingId: string,
    updatedRing: IRingFormSchema
  ): Promise<IRingDTOSchema> => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.patch(
        `/ring/${RingId}`,
        updatedRing
      );
      return response.data;
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError && error.response) {
        throw new Error(
          error.response.data.message || "Erro ao atualizar anel"
        );
      }
      throw new Error("Erro ao atualizar anel");
    }
  },

  deleteRing: async (RingId: string): Promise<void> => {
    try {
      await api.delete(`/ring/${RingId}`);
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message || "Erro ao deletar anel");
      }
      throw new Error("Erro ao deletar anel");
    }
  },
};
