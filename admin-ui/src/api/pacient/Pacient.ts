import { Destination } from "../destination/Destination";
import { User } from "../user/User";

export type Pacient = {
  createdAt: Date;
  destinations?: Array<Destination>;
  doctor?: User | null;
  id: string;
  name: string;
  updatedAt: Date;
};
