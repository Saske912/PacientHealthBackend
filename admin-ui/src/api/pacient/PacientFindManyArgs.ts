import { PacientWhereInput } from "./PacientWhereInput";
import { PacientOrderByInput } from "./PacientOrderByInput";

export type PacientFindManyArgs = {
  where?: PacientWhereInput;
  orderBy?: Array<PacientOrderByInput>;
  skip?: number;
  take?: number;
};
