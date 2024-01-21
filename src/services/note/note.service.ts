
import { apiClient } from "../../libs";
import {
  AllNotesResponse, INoteIputsDto,NoteResponse, IShareNotesDto, IContentAddDto
} from "./interface";

export const create = (data: INoteIputsDto) => {
  return apiClient.post<NoteResponse>("/notes", data);
};

export const deleteUser = (userId: string) => {
  return apiClient.delete(`/notes/${userId}`);
};

export const findOne = (userId: string) => {
  return apiClient.get<NoteResponse>(`/notes/${userId}`);
};

export const findAllUserNotes = () => {
  return apiClient.get<AllNotesResponse>("/notes/user-notes");
};

export const findAllUserSharedNotes = () => {
  return apiClient.get<AllNotesResponse>("/notes/shared-notes");
};

export const shareNote = (data: IShareNotesDto) => {
  return apiClient.post<NoteResponse>("/notes/share",data);
};

export const addContent = (noteId:string,data: IContentAddDto) => {
  return apiClient.post<NoteResponse>(`/notes/${noteId}/add-content`,data);
};
