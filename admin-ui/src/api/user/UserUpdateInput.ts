import { DestinationUpdateManyWithoutUsersInput } from "./DestinationUpdateManyWithoutUsersInput";
import { PacientUpdateManyWithoutUsersInput } from "./PacientUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  destinations?: DestinationUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  pacients?: PacientUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
