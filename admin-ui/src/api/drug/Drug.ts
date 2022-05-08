import { Destination } from "../destination/Destination";

export type Drug = {
  createdAt: Date;
  description: string | null;
  destination?: Destination | null;
  dosage: string | null;
  id: string;
  name: string;
  updatedAt: Date;
};
