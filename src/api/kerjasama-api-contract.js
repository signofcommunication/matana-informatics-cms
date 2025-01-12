import endpoint from "./axiosInstance";

export const getAllKerjasama = async () => {
  const response = await endpoint.get("/kerjasama");
  return response.data;
};

export const getKerjasamaById = async id => {
  const response = await endpoint.get(`/kerjasama/${id}`);
  return response.data;
};

// Menambahkan kerjasama baru
export const createKerjasama = async kerjasama => {
  const response = await endpoint.post("/kerjasama", kerjasama);
  return response.data;
};

// Mengupdate kerjasama berdasarkan ID
export const updateKerjasama = async (id, kerjasama) => {
  const response = await endpoint.patch(`/kerjasama/${id}`, kerjasama);
  return response.data;
};

// Menghapus kerjasama berdasarkan ID
export const deleteKerjasama = async id => {
  const response = await endpoint.delete(`/kerjasama/${id}`);
  return response.data;
};
