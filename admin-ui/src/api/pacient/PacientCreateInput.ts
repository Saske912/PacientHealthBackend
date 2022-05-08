import { DestinationCreateNestedManyWithoutPacientsInput } from "./DestinationCreateNestedManyWithoutPacientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PacientCreateInput = {
  destinations?: DestinationCreateNestedManyWithoutPacientsInput;
  doctor?: UserWhereUniqueInput | null;
  name: string;
};
