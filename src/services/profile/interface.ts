import { IResponseDto } from "../interface"


export interface IUserProfile {
  _id: string
  email: string
  firstName: string
  lastName: string
  password: string
  avatar: string
  enabled: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export type GetUserProfileResponse = IResponseDto<IUserProfile>;
