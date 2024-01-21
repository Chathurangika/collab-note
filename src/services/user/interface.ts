import { IResponseDto } from "../interface";
import { IUserProfile } from "../profile/interface";

export interface UserFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: string[];
}

export type CreatedUserResponse = IResponseDto<IUserProfile>;
