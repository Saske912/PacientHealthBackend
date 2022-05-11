import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PacientTitle } from "../pacient/PacientTitle";
import { UserTitle } from "../user/UserTitle";
import { DrugTitle } from "../drug/DrugTitle";

export const DestinationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="pacient.id"
          reference="Pacient"
          label="destination"
        >
          <SelectInput optionText={PacientTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="Doctor">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="drugs"
          reference="Drug"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DrugTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
