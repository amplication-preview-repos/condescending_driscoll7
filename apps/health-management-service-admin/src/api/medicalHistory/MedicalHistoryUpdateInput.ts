import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalHistoryUpdateInput = {
  condition?: string | null;
  description?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
  endDate?: Date | null;
  patient?: PatientWhereUniqueInput | null;
  startDate?: Date | null;
};
