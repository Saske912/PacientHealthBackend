import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DrugWhereInput = {
  description?: StringNullableFilter;
  destination?: DestinationWhereUniqueInput;
  dosage?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
