import endpoint from "./axiosInstance";

export const getAllDosen = async () => {
  const response = await endpoint.get("/dosen");
  return response.data;
};
