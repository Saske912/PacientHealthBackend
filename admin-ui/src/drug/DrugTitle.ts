import { Drug as TDrug } from "../api/drug/Drug";

export const DRUG_TITLE_FIELD = "name";

export const DrugTitle = (record: TDrug): string => {
  return record.name || record.id;
};
