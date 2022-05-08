import { Drug as TDrug } from "../api/drug/Drug";

export const DRUG_TITLE_FIELD = "dosage";

export const DrugTitle = (record: TDrug): string => {
  return record.dosage || record.id;
};
