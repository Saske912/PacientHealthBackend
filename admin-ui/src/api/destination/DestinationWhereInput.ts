import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DrugListRelationFilter } from "../drug/DrugListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PacientWhereUniqueInput } from "../pacient/PacientWhereUniqueInput";

export type DestinationWhereInput = {
  doctor?: UserWhereUniqueInput;
  drugs?: DrugListRelationFilter;
  id?: StringFilter;
  pacient?: PacientWhereUniqueInput;
};
