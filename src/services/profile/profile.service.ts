import { apiClient } from "../../libs";
import {
  GetUserProfileResponse,
} from "./interface";

export const getUserProfile = () => {
  return apiClient.get<GetUserProfileResponse>("/profile");
};
