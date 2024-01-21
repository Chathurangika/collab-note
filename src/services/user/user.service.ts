
import { apiClient } from "../../libs";
import {
  UserFormInputs,
  CreatedUserResponse,
} from "./interface";

export const create = (data: UserFormInputs) => {
  return apiClient.post<CreatedUserResponse>("/users", data);
};

export const deleteUser = (userId: string) => {
  return apiClient.delete(`/users/${userId}`);
};

export const findOne = (userId: string) => {
  return apiClient.get<CreatedUserResponse>(`/users/${userId}`);
};
