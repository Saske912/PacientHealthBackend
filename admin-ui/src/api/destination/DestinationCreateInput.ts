import { PacientWhereUniqueInput } from "../pacient/PacientWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DrugCreateNestedManyWithoutDestinationsInput } from "./DrugCreateNestedManyWithoutDestinationsInput";

export type DestinationCreateInput = {
  destination?: PacientWhereUniqueInput | null;
  doctor?: UserWhereUniqueInput | null;
  drugs?: DrugCreateNestedManyWithoutDestinationsInput;
};
