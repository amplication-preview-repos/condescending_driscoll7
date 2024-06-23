import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicationUpdateInput = {
  dosage?: number | null;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
  prescriptionDate?: Date | null;
};
