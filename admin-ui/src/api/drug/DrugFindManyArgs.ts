import { DrugWhereInput } from "./DrugWhereInput";
import { DrugOrderByInput } from "./DrugOrderByInput";

export type DrugFindManyArgs = {
  where?: DrugWhereInput;
  orderBy?: Array<DrugOrderByInput>;
  skip?: number;
  take?: number;
};
