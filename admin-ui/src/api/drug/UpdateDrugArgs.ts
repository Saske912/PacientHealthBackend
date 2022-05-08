import { DrugWhereUniqueInput } from "./DrugWhereUniqueInput";
import { DrugUpdateInput } from "./DrugUpdateInput";

export type UpdateDrugArgs = {
  where: DrugWhereUniqueInput;
  data: DrugUpdateInput;
};
