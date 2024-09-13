import { AxiosError, AxiosResponse } from "axios";
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
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
            // Bad Request
            throw new Error("Dados inválidos. Verifique e tente novamente.");
          case 401:
            // Unauthorized
            throw new Error("Não autorizado. Faça login novamente.");
          case 404:
            // Not Found
            throw new Error(
              "Falha ao conectar com o servidor. Tente novamente mais tarde."
            );
          case 500:
            // Internal Server Error
            throw new Error(
              "Erro interno do servidor. Tente novamente mais tarde."
            );
          default:
            // Outros erros
            throw new Error(
              error.response?.data?.message || "Erro desconhecido ao criar anel"
            );
        }
      } else {
        // Erro desconhecido
        throw new Error("Erro desconhecido ao criar anel");
      }
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
