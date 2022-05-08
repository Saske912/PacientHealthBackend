import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DrugUpdateManyWithoutDestinationsInput } from "./DrugUpdateManyWithoutDestinationsInput";
import { PacientWhereUniqueInput } from "../pacient/PacientWhereUniqueInput";

export type DestinationUpdateInput = {
  doctor?: UserWhereUniqueInput | null;
  drugs?: DrugUpdateManyWithoutDestinationsInput;
  pacient?: PacientWhereUniqueInput | null;
};
