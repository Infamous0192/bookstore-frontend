import { BaseEntity } from "./entity";
import { File } from "./file";
import { Tag } from "./tag";

export type Book = {
  title: string;
  content: string;
  author: string;
  price: number;
  thumbnail: File;
  tags: Tag[];
} & BaseEntity;

export type BookQuery = {
  page?: number;
  limit?: number;
  orderBy?: string;
  order?: string;
  keyword?: string;
  tags?: string[];
  user?: number | string;
};
