import {
  ILoginInputs, LoginResponse,
} from "./interface";
import { apiClient } from "../../libs";

export const login = (data: ILoginInputs) => {
  return apiClient.post<LoginResponse>("/auth/login", data);
};
