import { DestinationListRelationFilter } from "../destination/DestinationListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PacientWhereInput = {
  destinations?: DestinationListRelationFilter;
  doctor?: UserWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
};
