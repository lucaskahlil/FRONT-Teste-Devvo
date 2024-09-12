import { AxiosResponse } from "axios";
import { IRingDTOSchema } from "../../types";
import { api } from "../api";

export const apiRings = {
  getAllRings: async () => {
    try {
      const response: AxiosResponse<IRingDTOSchema[]> = await api.get("/rings");
      return response.data;
    } catch (error) {
      throw alert(error);
    }
  },

  getRingById: async (RingId: number) => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.get(
        `/Testpatient/${RingId}`
      );
      return response.data;
    } catch (error) {
      throw alert(error);
    }
  },

  createRing: async (newRing: IRingDTOSchema) => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.post(
        "/Testpatient",
        newRing
      );
      return response.data;
    } catch (error) {
      throw alert(error);
    }
  },

  updateRing: async (RingId: number, updatedRing: IRingDTOSchema) => {
    try {
      const response: AxiosResponse<IRingDTOSchema> = await api.put(
        `/Testpatient/${RingId}`,
        updatedRing
      );
      return response.data;
    } catch (error) {
      throw alert(error);
    }
  },

  deleteRing: async (RingId: number) => {
    try {
      await api.delete(`/Testpatient/${RingId}`);
    } catch (error) {
      throw alert(error);
    }
  },
};
