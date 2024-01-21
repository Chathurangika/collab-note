// @ts-ignore
import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiClient.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("accessToken");
    config.headers!["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        Cookies.remove("accessToken");
        window.location.reload();
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
