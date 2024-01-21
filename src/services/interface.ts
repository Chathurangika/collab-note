export interface IResponseDto<T> {
  status: "success" | "error";
  timestamp: string;
  elapsed: string;
  path: string;
  data: T;
}