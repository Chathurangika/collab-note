import { IResponseDto } from "../interface";

export interface ILoginInputs {
  email: string;
  password: string;
}

export interface ILoginResponse {
  userId: string;
  fullName: string;
  email: string;
  token: string;
}

export interface ILoggedUser {
  userId: string;
  fullName: string;
  email: string;
}

export type LoginResponse = IResponseDto<ILoginResponse>

