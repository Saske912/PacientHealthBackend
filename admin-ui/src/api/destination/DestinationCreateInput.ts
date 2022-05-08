import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DrugCreateNestedManyWithoutDestinationsInput } from "./DrugCreateNestedManyWithoutDestinationsInput";
import { PacientWhereUniqueInput } from "../pacient/PacientWhereUniqueInput";

export type DestinationCreateInput = {
  doctor?: UserWhereUniqueInput | null;
  drugs?: DrugCreateNestedManyWithoutDestinationsInput;
  pacient?: PacientWhereUniqueInput | null;
};
