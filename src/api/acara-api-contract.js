import endpoint from "./axiosInstance";

export const getAllAcara = async () => {
  const response = await endpoint.get("/acara");
  return response.data;
};

export const getAcaraById = async id => {
  const response = await endpoint.get(`/acara/${id}`);
  return response.data;
};

// Menambahkan acara baru
export const createAcara = async acara => {
  const response = await endpoint.post("/acara", acara);
  return response.data;
};

// Mengupdate acara berdasarkan ID
export const updateAcara = async (id, acara) => {
  const response = await endpoint.patch(`/acara/${id}`, acara);
  return response.data;
};

// Menghapus acara berdasarkan ID
export const deleteAcara = async id => {
  const response = await endpoint.delete(`/acara/${id}`);
  return response.data;
};
