import { Pacient as TPacient } from "../api/pacient/Pacient";

export const PACIENT_TITLE_FIELD = "name";

export const PacientTitle = (record: TPacient): string => {
  return record.name || record.id;
};
