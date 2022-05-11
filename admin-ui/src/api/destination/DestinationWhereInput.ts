import { PacientWhereUniqueInput } from "../pacient/PacientWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DrugListRelationFilter } from "../drug/DrugListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DestinationWhereInput = {
  destination?: PacientWhereUniqueInput;
  doctor?: UserWhereUniqueInput;
  drugs?: DrugListRelationFilter;
  id?: StringFilter;
};
