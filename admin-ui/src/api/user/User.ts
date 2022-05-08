import { Destination } from "../destination/Destination";
import { Pacient } from "../pacient/Pacient";

export type User = {
  createdAt: Date;
  destinations?: Array<Destination>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pacients?: Array<Pacient>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
