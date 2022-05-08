import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  SelectArrayInput,
} from "react-admin";

import { DestinationTitle } from "../destination/DestinationTitle";

export const DrugEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
