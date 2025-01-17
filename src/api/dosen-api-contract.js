import endpoint from "./axiosInstance";

export const getAllDosen = async () => {
  const response = await endpoint.get("/dosen");
  return response.data;
};

export const getDosenById = async id => {
  const response = await endpoint.get(`/dosen/${id}`);
  return response.data;
};

export const createDosen = async dosen => {
  const response = await endpoint.post("/dosen", dosen);
  return response.data;
};

export const updateDosen = async (id, dosen) => {
  const response = await endpoint.patch(`/dosen/${id}`, dosen);
  return response.data;
};

export const deleteDosen = async id => {
  const response = await endpoint.delete(`/dosen/${id}`);
  return response.data;
};
