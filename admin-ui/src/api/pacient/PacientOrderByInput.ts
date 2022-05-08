import { SortOrder } from "../../util/SortOrder";

export type PacientOrderByInput = {
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
