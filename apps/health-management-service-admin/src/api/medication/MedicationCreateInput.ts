import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicationCreateInput = {
  dosage?: number | null;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
  prescriptionDate?: Date | null;
};
