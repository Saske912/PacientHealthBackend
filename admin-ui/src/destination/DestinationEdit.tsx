import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { DrugTitle } from "../drug/DrugTitle";
import { PacientTitle } from "../pacient/PacientTitle";

export const DestinationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <ReferenceInput source="pacient.id" reference="Pacient" label="Pacient">
          <SelectInput optionText={PacientTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
