import api from "./api.js";

export const registerUser = async (payload) => {
  const response = await api.post("/auth/register", payload);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};
