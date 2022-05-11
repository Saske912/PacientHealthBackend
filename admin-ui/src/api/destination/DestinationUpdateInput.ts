import { PacientWhereUniqueInput } from "../pacient/PacientWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DrugUpdateManyWithoutDestinationsInput } from "./DrugUpdateManyWithoutDestinationsInput";

export type DestinationUpdateInput = {
  destination?: PacientWhereUniqueInput | null;
  doctor?: UserWhereUniqueInput | null;
  drugs?: DrugUpdateManyWithoutDestinationsInput;
};
