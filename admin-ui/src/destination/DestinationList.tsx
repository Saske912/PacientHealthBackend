import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PACIENT_TITLE_FIELD } from "../pacient/PacientTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DestinationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"destinations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
