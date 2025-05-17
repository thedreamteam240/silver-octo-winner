import axios from "axios";
import { getSession } from "next-auth/react";

const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  // Type assertion to include accessToken
  const user = session?.user as { accessToken?: string };

  if (user?.accessToken) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;