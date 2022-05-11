import { Pacient } from "../pacient/Pacient";
import { User } from "../user/User";
import { Drug } from "../drug/Drug";

export type Destination = {
  createdAt: Date;
  destination?: Pacient | null;
  doctor?: User | null;
  drugs?: Array<Drug>;
  id: string;
  updatedAt: Date;
};
