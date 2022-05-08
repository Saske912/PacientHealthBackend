import { DestinationUpdateManyWithoutPacientsInput } from "./DestinationUpdateManyWithoutPacientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PacientUpdateInput = {
  destinations?: DestinationUpdateManyWithoutPacientsInput;
  doctor?: UserWhereUniqueInput | null;
  name?: string;
};
