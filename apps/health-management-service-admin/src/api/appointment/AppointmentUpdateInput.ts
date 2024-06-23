import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  doctor?: DoctorWhereUniqueInput | null;
  notes?: string | null;
  patient?: PatientWhereUniqueInput | null;
  time?: Date | null;
};
