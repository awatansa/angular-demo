export interface Response<T> {
  code: number;
  messgae: string;
  description: string;
  data: T;
}
