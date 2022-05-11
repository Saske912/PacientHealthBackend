import { SortOrder } from "../../util/SortOrder";

export type DrugOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  destinationId?: SortOrder;
  dosage?: SortOrder;
  name?: SortOrder;
  expire?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
