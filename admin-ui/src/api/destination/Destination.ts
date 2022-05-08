import { User } from "../user/User";
import { Drug } from "../drug/Drug";
import { Pacient } from "../pacient/Pacient";

export type Destination = {
  createdAt: Date;
  doctor?: User | null;
  drugs?: Array<Drug>;
  id: string;
  pacient?: Pacient | null;
  updatedAt: Date;
};
