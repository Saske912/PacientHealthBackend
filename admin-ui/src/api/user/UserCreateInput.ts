import { DestinationCreateNestedManyWithoutUsersInput } from "./DestinationCreateNestedManyWithoutUsersInput";
import { PacientCreateNestedManyWithoutUsersInput } from "./PacientCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  destinations?: DestinationCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  pacients?: PacientCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
