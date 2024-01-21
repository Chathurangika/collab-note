import {
  ILoginInputs, LoginResponse,
} from "./interface";
import { apiClient } from "../../libs";

export const login = (data: ILoginInputs) => {
  return apiClient.post<LoginResponse>("/auth/login", data);
};

const TOKEN_KEY = 'accessToken';

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
