import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { MedicalHistoryUpdateManyWithoutPatientsInput } from "./MedicalHistoryUpdateManyWithoutPatientsInput";
import { MedicationUpdateManyWithoutPatientsInput } from "./MedicationUpdateManyWithoutPatientsInput";
import { NotificationUpdateManyWithoutPatientsInput } from "./NotificationUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  dob?: Date | null;
  email?: string | null;
  medicalHistories?: MedicalHistoryUpdateManyWithoutPatientsInput;
  medications?: MedicationUpdateManyWithoutPatientsInput;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutPatientsInput;
};
