import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DESTINATION_TITLE_FIELD } from "./DestinationTitle";
import { PACIENT_TITLE_FIELD } from "../pacient/PacientTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DestinationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="destination"
          source="pacient.id"
          reference="Pacient"
        >
          <TextField source={PACIENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Doctor" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Drug"
          target="DestinationId"
          label="drugs"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="destination"
              source="destination.id"
              reference="Destination"
            >
              <TextField source={DESTINATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="dosage" source="dosage" />
            <TextField label="Drug" source="name" />
            <TextField label="expire" source="expire" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
