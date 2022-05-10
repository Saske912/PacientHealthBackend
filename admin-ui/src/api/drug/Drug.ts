import { Destination } from "../destination/Destination";

export type Drug = {
  createdAt: Date;
  description: string | null;
  destination?: Destination | null;
  dosage: string | null;
  expire: Date;
  id: string;
  name?: "Analgin" | "Dimidrol" | null;
  updatedAt: Date;
  name?: "Analgin" | "Dimidrol" | null;
};
