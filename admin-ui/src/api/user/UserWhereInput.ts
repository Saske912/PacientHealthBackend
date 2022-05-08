import { DestinationListRelationFilter } from "../destination/DestinationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PacientListRelationFilter } from "../pacient/PacientListRelationFilter";

export type UserWhereInput = {
  destinations?: DestinationListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  pacients?: PacientListRelationFilter;
  username?: StringFilter;
};
