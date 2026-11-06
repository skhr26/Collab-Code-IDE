import { api } from "../utils/axios";

export const login = async (token) => {
  try {
    const { data } = await api.post("/api/auth/login", { token });
    return data;
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    throw err;
  }
};