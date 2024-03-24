import { BaseEntity } from "./entity";

export type Tag = {
  name: string;
  description: string;
} & BaseEntity;

export type TagQuery = {
  page?: number;
  limit?: number;
  keyword?: string;
};
