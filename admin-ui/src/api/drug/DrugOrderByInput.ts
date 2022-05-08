import { SortOrder } from "../../util/SortOrder";

export type DrugOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  destinationId?: SortOrder;
  dosage?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
