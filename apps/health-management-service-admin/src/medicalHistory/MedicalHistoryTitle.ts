import { MedicalHistory as TMedicalHistory } from "../api/medicalHistory/MedicalHistory";

export const MEDICALHISTORY_TITLE_FIELD = "condition";

export const MedicalHistoryTitle = (record: TMedicalHistory): string => {
  return record.condition?.toString() || String(record.id);
};
