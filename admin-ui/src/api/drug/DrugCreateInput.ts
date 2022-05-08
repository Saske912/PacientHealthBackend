import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type DrugCreateInput = {
  description?: string | null;
  destination?: DestinationWhereUniqueInput | null;
  dosage?: string | null;
  expire: Date;
  name: "Analgin" | "Hidroperit";
};
