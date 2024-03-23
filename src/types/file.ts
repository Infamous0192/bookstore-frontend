import { BaseEntity } from "./entity";

export type File = {
  filename: string;
  originalname: string;
  path: string;
  extension: string;
  size: number;
} & BaseEntity;
