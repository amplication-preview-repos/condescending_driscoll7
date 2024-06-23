import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import { MedicalHistoryUpdateManyWithoutDoctorsInput } from "./MedicalHistoryUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  contactInformation?: string | null;
  medicalHistories?: MedicalHistoryUpdateManyWithoutDoctorsInput;
  name?: string | null;
  specialty?: string | null;
  typeField?: "Option1" | null;
};
