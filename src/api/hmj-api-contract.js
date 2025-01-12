import endpoint from "./axiosInstance";

export const getAllHmj = async () => {
  const response = await endpoint.get("/hmj");
  return response.data;
};

export const getHmjById = async id => {
  const response = await endpoint.get(`/hmj/${id}`);
  return response.data;
};

export const createHmj = async kerjasama => {
  const response = await endpoint.post("/hmj", kerjasama);
  return response.data;
};

export const updateHmj = async (id, kerjasama) => {
  const response = await endpoint.patch(`/hmj/${id}`, kerjasama);
  return response.data;
};

export const deleteHmj = async id => {
  const response = await endpoint.delete(`/hmj/${id}`);
  return response.data;
};
