import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  SelectArrayInput,
} from "react-admin";

import { DestinationTitle } from "../destination/DestinationTitle";

export const DrugCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="destination.id"
          reference="Destination"
          label="destination"
        >
          <SelectInput optionText={DestinationTitle} />
        </ReferenceInput>
        <TextInput label="dosage" source="dosage" />
        <DateInput label="expire" source="expire" />
        <SelectArrayInput
          label="name"
          source="name"
          choices={[
            { label: "analgin", value: "Analgin" },
            { label: "hidroperit", value: "Hidroperit" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
