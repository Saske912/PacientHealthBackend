import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";

export const DrugList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"drugs"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="expire" source="expire" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
