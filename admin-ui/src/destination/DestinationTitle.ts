import { Destination as TDestination } from "../api/destination/Destination";

export const DESTINATION_TITLE_FIELD = "id";

export const DestinationTitle = (record: TDestination): string => {
  return record.id || record.id;
};
