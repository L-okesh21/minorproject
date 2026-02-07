import api from "./api.js";

export const fetchJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};

export const createJob = async (payload) => {
  const response = await api.post("/jobs", payload);
  return response.data;
};
