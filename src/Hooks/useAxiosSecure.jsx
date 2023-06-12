import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: "https://summer-camp-sv.vercel.app",
  });
  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const token = Cookies.get("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    axiosInstance.interceptors.response.use(
      (res) => res,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          Cookies.remove("access_token");
          navigate("/signin");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosInstance]);
  return axiosInstance;
};
