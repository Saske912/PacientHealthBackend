import { DrugWhereInput } from "./DrugWhereInput";

export type DrugListRelationFilter = {
  every?: DrugWhereInput;
  some?: DrugWhereInput;
  none?: DrugWhereInput;
};
