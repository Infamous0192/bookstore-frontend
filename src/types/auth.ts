import { BaseEntity } from "./entity";

export type Creds = {
  id: string | number;
  username: string;
  name: string;
  role: string;
};

export type User = {
  name: string;
  username: string;
  role: string;
  point: number;
} & BaseEntity;

export type LoginDTO = {
  username: string;
  password: string;
};

export type Authenticated = {
  token: string;
  creds: Creds;
};
