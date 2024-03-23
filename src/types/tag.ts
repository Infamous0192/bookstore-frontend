import { BaseEntity } from "./entity";

export type Tag = {
  name: string;
  description: string;
} & BaseEntity;
