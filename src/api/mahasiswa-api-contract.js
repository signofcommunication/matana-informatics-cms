import endpoint from "./axiosInstance";

// Mendapatkan semua mahasiswa
export const getAllMahasiswa = async () => {
  const response = await endpoint.get("/mahasiswa");
  return response.data;
};

export const getMahasiswaByNIM = async nim => {
  const response = await endpoint.get(`/mahasiswa/${nim}`);
  return response.data;
};

// Menambahkan mahasiswa baru
export const createMahasiswa = async mahasiswa => {
  const response = await endpoint.post("/mahasiswa", mahasiswa);
  return response.data;
};

// Mengupdate mahasiswa berdasarkan NIM
export const updateMahasiswa = async (nim, mahasiswa) => {
  const response = await endpoint.patch(`/mahasiswa/${nim}`, mahasiswa);
  return response.data;
};

// Menghapus mahasiswa berdasarkan NIM
export const deleteMahasiswa = async nim => {
  const response = await endpoint.delete(`/mahasiswa/${nim}`);
  return response.data;
};
