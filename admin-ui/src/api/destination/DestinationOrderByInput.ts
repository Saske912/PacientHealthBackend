import { SortOrder } from "../../util/SortOrder";

export type DestinationOrderByInput = {
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  pacientId?: SortOrder;
  updatedAt?: SortOrder;
};
