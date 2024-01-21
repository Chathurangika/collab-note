import { IResponseDto } from "../interface";

export interface INotes {
  _id: string
  title: string
  owner: Owner
  sharedUsers: any[]
  contentUpdates: ContentUpdate[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Owner {
  _id: string
  fullName: string
}

export interface ContentUpdate {
  content: string
  from: string
  order: number
  editedBy: EditedBy
  createdAt: string
  updatedAt: string
}

export interface EditedBy {
  _id: string
  fullName: string
}

export type AllNotesResponse = IResponseDto<INotes[]>;
export type NoteResponse =  IResponseDto<INotes>;

export interface INoteIputsDto {
  title: string
  content: string
}

export interface IShareNotesDto {
  userId: string[]
  noteId: string
}

export interface IContentAddDto {
  content: string
}

